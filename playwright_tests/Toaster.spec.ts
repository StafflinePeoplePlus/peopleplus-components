import { test, expect } from 'playwright-test-coverage';

const TIMEOUT_MESSAGE = 'Changes successfully saved.';
const NULL_TIMEOUT_MESSAGE = 'Uploading videos.';

test('toast should appear after a button click', async ({ page }) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Delete' }).click();
	await expect(page.getByRole('alert', { name: `${TIMEOUT_MESSAGE}` })).toBeVisible();
});

test('toast should disappear after a button click', async ({ page }) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Delete' }).click();
	await expect(page.getByRole('alert', { name: `${TIMEOUT_MESSAGE}` })).not.toBeVisible();
});

test('toast should not disappear if timeout is set to null', async ({ page }) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Upload' }).click();
	await expect(page.getByRole('alert', { name: `${NULL_TIMEOUT_MESSAGE}` })).toBeVisible();

	await page
		.getByRole('alert', { name: `${NULL_TIMEOUT_MESSAGE}` })
		.getByRole('button')
		.click();
	await expect(page.getByRole('alert', { name: `${NULL_TIMEOUT_MESSAGE}` })).not.toBeVisible();
});
