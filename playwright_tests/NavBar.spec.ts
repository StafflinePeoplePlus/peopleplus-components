import { expect } from 'playwright-test-coverage';
import { test } from './fixtures';

test('NavBar content is visible', async ({ page, isMobile }) => {
	await page.goto('/test/navbar');
	const navbar = page.getByTestId('navbar');
	const hamburger = navbar.getByRole('button');

	if (isMobile) {
		await expect(hamburger).toBeVisible();
		await expect(navbar.getByTestId('start')).toBeVisible();
		await expect(navbar.getByTestId('middle')).not.toBeVisible();
		await expect(navbar.getByTestId('end')).not.toBeVisible();

		await hamburger.click();
		await expect(navbar.getByTestId('start')).toBeVisible();
		await expect(navbar.getByTestId('middle')).toBeVisible();
		await expect(navbar.getByTestId('end')).toBeVisible();
	} else {
		await expect(hamburger).not.toBeVisible();
		await expect(navbar.getByTestId('start')).toBeVisible();
		await expect(navbar.getByTestId('middle')).toBeVisible();
		await expect(navbar.getByTestId('end')).toBeVisible();
	}
});
