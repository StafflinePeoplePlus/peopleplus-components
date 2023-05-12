import { expect, test } from '@playwright/test';

test('NavBar works on larger screens', async ({ page }) => {
	await page.goto('/test/navbar');
	const navbar = page.getByTestId('navbar');
	const hamburger = navbar.getByRole('button');

	await expect(hamburger).not.toBeVisible();
	await expect(navbar.getByTestId('start')).toBeVisible();
	await expect(navbar.getByTestId('middle')).toBeVisible();
	await expect(navbar.getByTestId('end')).toBeVisible();
});

test('NavBar works on mobile screens', async ({ page }) => {
	await page.setViewportSize({ width: 767, height: 1000 });
	await page.goto('/test/navbar');
	const navbar = page.getByTestId('navbar');
	const hamburger = navbar.getByRole('button');

	await expect(hamburger).toBeVisible();
	await expect(navbar.getByTestId('start')).toBeVisible();
	await expect(navbar.getByTestId('middle')).not.toBeVisible();
	await expect(navbar.getByTestId('end')).not.toBeVisible();

	await hamburger.click();
	await expect(navbar.getByTestId('start')).toBeVisible();
	await expect(navbar.getByTestId('middle')).toBeVisible();
	await expect(navbar.getByTestId('end')).toBeVisible();
});
