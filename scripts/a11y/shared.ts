import { setTimeout } from 'node:timers/promises';

export type IssueContext = Awaited<ReturnType<typeof createIssueContext>>;
export async function createIssueContext(githubToken: string) {
	const github = await import('@actions/github');
	const context = github.context;
	const ref = context.payload.pull_request?.head.ref ?? context.ref;
	const branchName = ref.startsWith('refs/heads/') ? ref.slice('refs/heads/'.length) : ref;
	const issueTitle = `A11y Report - ${branchName}`;
	const octokit = github.getOctokit(githubToken);
	const issues = await retryIfRateLimited(() =>
		octokit.rest.search.issuesAndPullRequests({
			q: encodeURI(
				`is:issue state:open repo:${context.repo.owner}/${context.repo.repo} ${issueTitle}`,
			).replace(/%20/g, '+'),
			sort: 'updated',
		}),
	);
	const issue = issues.data.items.find((issue) => issue.title === issueTitle);
	return {
		issue,
		issueTitle,
		repo: context.repo,
		octokit,
		prNumber: context.payload.pull_request?.number,
	};
}

const MAX_RETRIES = 5;
export async function retryIfRateLimited<T>(action: () => Promise<T>, retries = 0): Promise<T> {
	try {
		return await action();
	} catch (err) {
		if (err instanceof Error && err.message.includes('secondary rate limit')) {
			const attempts = retries + 1;
			if (retries >= MAX_RETRIES) {
				console.error(`Exceeded secondary rate limit after ${attempts} attempts, aborting`);
				throw err;
			}

			console.log(`Exceeded secondary rate limit, retrying in 60 seconds... (${attempts})`);
			await setTimeout(60000);
			return retryIfRateLimited(action, retries + 1);
		}
		throw err;
	}
}
