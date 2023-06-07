import { expect } from 'playwright-test-coverage';
import { test } from './fixtures';

test('customise shows cookie categories with correct consent', async ({ page }) => {
	await page.goto('/test/cookies/banner');

	await page.getByRole('button', { name: 'Customise' }).click();

	const cat1 = page.getByRole('switch', { name: 'Category 1', includeHidden: true });
	const cat2 = page.getByRole('switch', { name: 'Category 2' });
	const cat3 = page.getByRole('switch', { name: 'Category 3' });

	await expect(cat1).toBeAttached();
	await expect(cat1).not.toBeVisible();
	await expect(cat2).toBeInViewport();
	await expect(cat3).toBeInViewport();

	await expect(cat1).toBeChecked();
	await expect(cat2).toBeChecked();
	await expect(cat3).not.toBeChecked();

	await page.getByRole('button', { name: 'Cancel' }).click();
	await expect(cat1).not.toBeVisible();
	await expect(cat2).not.toBeVisible();
	await expect(cat3).not.toBeVisible();
});

test('manage cookies show categories with correct consent', async ({ page }) => {
	await page.goto('/test/cookies/manage');

	const cat1 = page.getByRole('switch', { name: 'Category 1', includeHidden: true });
	const cat2 = page.getByRole('switch', { name: 'Category 2' });
	const cat3 = page.getByRole('switch', { name: 'Category 3' });

	await expect(cat1).toBeAttached();
	await expect(cat1).not.toBeVisible();
	await expect(cat2).toBeInViewport();
	await expect(cat3).toBeInViewport();

	await expect(cat1).toBeChecked();
	await expect(cat2).toBeChecked();
	await expect(cat3).not.toBeChecked();
});
