import { expect } from 'playwright-test-coverage';
import { test } from './fixtures';
import kayle from 'kayle';
import { writeFile, rm } from 'node:fs/promises';

test.describe.configure({ retries: 0, timeout: 5 * 60 * 1000 });
test.skip(({ browserName, isMobile }) => isMobile || browserName !== 'chromium');

const MAX_REPORT_LENGTH = process.env.MAX_REPORT_LENGTH
	? parseInt(process.env.MAX_REPORT_LENGTH)
	: Infinity;

test('kayle a11y test', async ({ browser, page, baseURL }) => {
	const audits = await kayle.autoKayle({
		page,
		browser,
		origin: baseURL,
		standard: 'WCAG2AA',
		runners: ['htmlcs', 'axe'],
		includeWarnings: true,
		timeout: 4 * 60 * 1000,
		ignore: [
			// Ignore empty alt, it is either intentional, or outside our control due to user
			// editable content
			'WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2',
			// This is just a notice to check that contrast is ok as it can't figure it out itself,
			// not useful as a warning.
			'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs',
			'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Alpha',
			'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Alpha',
			'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage',
			'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage',
			// Complaint about using position fixed as it may lead to scrolling in two dimensions...
			// but it doesn't so again not an actionable warning
			'WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206',
			// Complaining about having a bold paragraph... i mean... come on now
			'WCAG2AA.Principle1.Guideline1_3.1_3_1.H42',
			// Informating about use of opt group for select, but it is not applicable
			'WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2',
			// Svelte handles select values for us, but it doesn't reflect the selected
			// attribute into the dom, so the test falsely flags it
			'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value',
			// The carousel uses aria-hidden="true" on the visually hidden elements. This is desired
			// behaviour according to the guidelines so this is a false flag
			'aria-hidden-focus',
			// A note to use axe-core on frames, we shall not
			'frame-tested',
			// Too many false positives, wcag tests still covers contrast and seems to be more
			// reliable.
			'color-contrast',
			// Not always actionable
			'link-in-text-block',
			// Doesn't recognise `cy` as valid, though it is!
			'html-lang-valid',

			// The amazing peopleplus red is not very accessible, but it is our brand color. either we disable it or we fight with marketing about colour contrasts
			// TODO: find solution (invert colours for a11y tests? switch to darker red? black instead of white for text?)
			'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail',

			// It's picking up some page content on the /guidelines path as another landmark, but it is not.
			'landmark-one-main',
			// All page content is contained by landmarks... but it isnt being picked up as such (only on /guidelines path)
			'region',

			// This is a false warning caused by 'shiki' and our code previews when displaying components
			'WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour',
		],
	});

	const counts = audits.reduce(
		(counts, audit) => ({
			errors: counts.errors + audit.meta.errorCount,
			warnings: counts.warnings + audit.meta.warningCount,
		}),
		{ errors: 0, warnings: 0 },
	);
	if (counts.errors > 0 || counts.warnings > 0) {
		const errorReports: string[] = [];
		for (const audit of audits) {
			const report = buildAuditReport(audit, 'error');
			if (report) errorReports.push(report);
		}
		const warningReports: string[] = [];
		for (const audit of audits) {
			const report = buildAuditReport(audit, 'warning');
			if (report) warningReports.push(report);
		}

		let report = `# ${counts.errors + counts.warnings} total issues, ${counts.errors} errors, and ${
			counts.warnings
		} warnings found.\n\n`;
		let reportBody = '';
		if (errorReports.length > 0) {
			reportBody += `## ${counts.errors} Errors\n\n<details>`;
			for (const text of errorReports) {
				if (reportBody.length > MAX_REPORT_LENGTH) {
					report += `This list exceeds ${MAX_REPORT_LENGTH} chars and is truncated...\n\n`;
					break;
				}

				reportBody += text + '\n';
			}
			reportBody += '</details>\n\n';
		}
		if (
			warningReports.length > 0 &&
			reportBody.length + warningReports[0].length <= MAX_REPORT_LENGTH
		) {
			reportBody += `## ${counts.warnings} Warnings\n\n<details>`;
			for (const text of warningReports) {
				if (reportBody.length > MAX_REPORT_LENGTH) {
					report += `This list exceeds ${MAX_REPORT_LENGTH} chars and is truncated...\n\n`;
					break;
				}

				reportBody += text + '\n';
			}
			reportBody += '</details>\n\n';
		}
		report += reportBody;

		await writeFile('test-results/a11y.md', report);
	} else {
		await rm('test-results/a11y.md', { force: true });
	}

	expect(counts.errors).toBeLessThanOrEqual(0);
	expect(counts.warnings).toBeLessThanOrEqual(0);
});

function buildAuditReport(audit: kayle.Audit, kind: 'error' | 'warning') {
	if (audit.meta[`${kind}Count`] == 0) {
		return undefined;
	}
	let report = '<details><summary>';
	report += `${audit.pageUrl} - ${audit.meta[`${kind}Count`]} ${kind}s`;
	report += '</summary>\n\n';
	for (const issue of audit.issues) {
		if (issue.type !== kind) {
			continue;
		}
		report += `**${issue.type.toUpperCase()}** *${issue.code}*\n\n`;
		report += '```html\n';
		report += `${issue.context}\n`;
		report += '```\n';
		report += issue.message;
		report += '\n\n---\n';
	}

	report += '</details>\n';
	return report;
}
