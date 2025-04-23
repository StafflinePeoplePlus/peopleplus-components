import { IssueContext, createIssueContext, retryIfRateLimited } from './shared';

export async function markExistingReviewOutdated({
	octokit,
	repo,
	prNumber,
}: Pick<IssueContext, 'octokit' | 'repo' | 'prNumber'>) {
	if (!prNumber) {
		return;
	}

	const existingReviews = await retryIfRateLimited(() =>
		octokit.rest.pulls.listReviews({
			...repo,
			pull_number: prNumber,
		}),
	);
	const existingReview = existingReviews.data
		.reverse()
		.find(
			(review) =>
				review.user?.login === 'github-actions[bot]' &&
				review.body.includes('<!-- a11y report -->'),
		);
	if (existingReview) {
		if (existingReview.state !== 'DISMISSED') {
			try {
				await retryIfRateLimited(() =>
					octokit.rest.pulls.dismissReview({
						...repo,
						pull_number: prNumber,
						review_id: existingReview.id,
						message: 'Outdated by new a11y report',
					}),
				);
			} catch (e) {
				console.warn('Unable to dismiss review', e);
			}
		}
		await retryIfRateLimited(() =>
			octokit.graphql(
				`mutation MarkReviewOutdated($minimizeInput: MinimizeCommentInput!) {
				minimizeComment(input: $minimizeInput) {
					clientMutationId
				}
			}`,
				{
					minimizeInput: {
						subjectId: existingReview.node_id,
						classifier: 'OUTDATED',
					},
				},
			),
		);
	}
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN not set');
}

const { issue, octokit, repo, prNumber } = await createIssueContext(GITHUB_TOKEN);
if (!issue && prNumber) {
	console.log('Marking any existing review as outdated');
	await markExistingReviewOutdated({ octokit, repo, prNumber });
}
