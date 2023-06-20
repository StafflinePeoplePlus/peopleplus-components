import { test, expect } from '@playwright/test';

test('toast should disappear after a button click', async ({ page }) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Delete' }).click();
	await page.waitForTimeout(5000);
	const isToastPresent = await page.$('text="Changes successfully saved."');
	expect(isToastPresent).toBe(null);
});

test('toast should not disappear after a button click if timeout is set to null', async ({
	page
}) => {
	await page.goto('/Toaster');
	await page.getByRole('button', { name: 'Upload' }).click();
	await page.getByText('text="Uploading videos."');
	await page.waitForTimeout(6000);
	const isToastPresent = await page.$('text="Uploading videos."');
	expect(isToastPresent).not.toBeNull();

	await page.getByRole('alert', { name: 'Uploading videos.' }).getByRole('button').click();
	await page.waitForTimeout(1000);
	const isToast = await page.$('text="Uploading videos."');
	expect(isToast).toBeNull();
});
