import { test, expect } from '@playwright/test';

const TIMEOUT_MESSAGE = 'Changes successfully saved.';
const NULL_TIMEOUT_MESSAGE = 'Uploading videos.';

test('toast should appear after a button click', async ({ page }) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Delete' }).click();
	await page.waitForTimeout(1000);
	const isToastPresent = await page.$(`text="${TIMEOUT_MESSAGE}"`);
	expect(isToastPresent).not.toBeNull();
});

test('toast should disappear after a button click', async ({ page }) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Delete' }).click();
	await page.waitForTimeout(5000);
	const isToastPresent = await page.$(`text="${TIMEOUT_MESSAGE}"`);
	expect(isToastPresent).toBe(null);
});

test('toast should not disappear if timeout is set to null', async ({
	page
}) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Upload' }).click();
	await page.getByText(`text="${NULL_TIMEOUT_MESSAGE}"`);
	await page.waitForTimeout(6000);
	const isToastPresent = await page.$(`text="${NULL_TIMEOUT_MESSAGE}"`);
	expect(isToastPresent).not.toBeNull();

	await page.getByRole('alert', { name: NULL_TIMEOUT_MESSAGE }).getByRole('button').click();
	await page.waitForTimeout(1000);
	const isToast = await page.$(`text="${NULL_TIMEOUT_MESSAGE}"`);
	expect(isToast).toBeNull();
});
