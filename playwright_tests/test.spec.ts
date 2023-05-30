import { expect, test } from 'playwright-test-coverage';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'PeoplePlus Svelte Components' })).toBeVisible();
});
