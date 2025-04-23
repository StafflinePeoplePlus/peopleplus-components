import { readFile } from 'fs/promises';
import { createIssueContext, retryIfRateLimited } from './shared';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN not set');
}

const { issue, issueTitle, octokit, repo, prNumber } = await createIssueContext(GITHUB_TOKEN);

let report = await readFile('test-results/a11y.md', { encoding: 'utf-8' }).catch(() => undefined);
if (report) {
	console.log('Found a11y report.');
	report = '<!-- a11y report -->\n\n' + report;
	if (issue) {
		await retryIfRateLimited(() =>
			octokit.rest.issues.update({
				...repo,
				issue_number: issue.number,
				body: report,
			}),
		);
	} else if (prNumber) {
		await retryIfRateLimited(() =>
			octokit.rest.pulls.createReview({
				...repo,
				pull_number: prNumber,
				body: report,
				event: 'REQUEST_CHANGES',
			}),
		);
	} else {
		await retryIfRateLimited(() =>
			octokit.rest.issues.create({
				...repo,
				title: issueTitle,
				body: report,
			}),
		);
	}
} else {
	console.log('No a11y report found, assuming no issues found.');
	if (issue) {
		await retryIfRateLimited(() =>
			octokit.rest.issues.createComment({
				...repo,
				issue_number: issue.number,
				body: `All a11y issues have been resolved!`,
			}),
		);
		await retryIfRateLimited(() =>
			octokit.rest.issues.update({
				...repo,
				issue_number: issue.number,
				state: 'closed',
				state_reason: 'completed',
			}),
		);
	} else if (prNumber) {
		await retryIfRateLimited(() =>
			octokit.rest.pulls.createReview({
				...repo,
				pull_number: prNumber,
				event: 'APPROVE',
				body: '<!-- a11y report -->\n\nNo a11y issues found!',
			}),
		);
	}
}
