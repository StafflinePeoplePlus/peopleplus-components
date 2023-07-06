import { expect } from 'playwright-test-coverage';
import { test } from './fixtures';

const POPOVER_BUTTON_TEXT = 'Show popover';
const POPOVER_CONTENT = 'Popover content!';

test('Popover is opened by button', async ({ page }) => {
	await page.goto('/test/popover');

	await expect(page.getByText(POPOVER_CONTENT)).not.toBeVisible();
	await page.getByRole('button', { name: POPOVER_BUTTON_TEXT }).click();
	await expect(page.getByText(POPOVER_CONTENT)).toBeVisible();
	await page.getByRole('button', { name: POPOVER_BUTTON_TEXT }).click();
	await expect(page.getByText(POPOVER_CONTENT)).not.toBeVisible();
});
