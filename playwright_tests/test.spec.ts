import { expect } from 'playwright-test-coverage';
import { test } from './fixtures';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'PeoplePlus Svelte Components' })).toBeVisible();
});
