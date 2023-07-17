import { expect } from 'playwright-test-coverage';
import { test } from './fixtures';
import { Locator, Page } from '@playwright/test';

for (const axis of ['x', 'y']) {
	test.describe(`${axis} axis`, () => {
		test('drag to reorder', async ({ page }) => {
			await page.goto(`/test/sortable/${axis}`);

			// Drag above item 50
			await dragAndDrop(
				page,
				page.getByText('Item 1', { exact: true }),
				page.getByText('Item 50', { exact: true }),
			);

			await expect(page.locator(':text("Item 49") + :text("Item 1")')).toBeVisible();
			await expect(page.locator(':text("Item 1") + :text("Item 50")')).toBeVisible();

			// Drag below item 50
			await page.reload();
			await dragAndDrop(
				page,
				page.getByText('Item 1', { exact: true }),
				page.getByText('Item 50', { exact: true }),
				{ [axis]: 60 },
			);

			await expect(page.locator(':text("Item 50") + :text("Item 1")')).toBeVisible();
			await expect(page.locator(':text("Item 1") + :text("Item 51")')).toBeVisible();
		});

		test('reorder to end', async ({ page }) => {
			await page.goto(`/test/sortable/${axis}`);

			await dragAndDrop(
				page,
				page.getByText('Item 1', { exact: true }),
				page.getByText('Item 100', { exact: true }),
				{ [axis]: 60 },
			);

			await expect(page.locator(':text("Item 100") + :text("Item 1")')).toBeVisible();
		});

		test('reorder to start', async ({ page }) => {
			await page.goto(`/test/sortable/${axis}`);

			await dragAndDrop(
				page,
				page.getByText('Item 100', { exact: true }),
				page.getByText('Item 1', { exact: true }),
			);

			await expect(page.locator(':text("Item 100") + :text("Item 1")')).toBeVisible();
		});
	});
}

test.describe('grid', () => {
	test('drag to reorder', async ({ page }) => {
		await page.goto('/test/sortable/grid');

		// Drag over item 50
		await dragAndDrop(
			page,
			page.getByText('Item 1', { exact: true }),
			page.getByText('Item 50', { exact: true }),
		);

		await expect(page.locator(':text("Item 50") + :text("Item 1")')).toBeVisible();
		await expect(page.locator(':text("Item 1") + :text("Item 51")')).toBeVisible();
	});

	test('reorder to end', async ({ page }) => {
		await page.goto('/test/sortable/grid');

		await dragAndDrop(
			page,
			page.getByText('Item 1', { exact: true }),
			page.getByText('Item 100', { exact: true }),
		);

		await expect(page.locator(':text("Item 100") + :text("Item 1")')).toBeVisible();
	});

	test('reorder to start', async ({ page }) => {
		await page.goto('/test/sortable/grid');

		await dragAndDrop(
			page,
			page.getByText('Item 100', { exact: true }),
			page.getByText('Item 1', { exact: true }),
		);

		await expect(page.locator(':text("Item 100") + :text("Item 1")')).toBeVisible();
	});
});

async function dragAndDrop(
	page: Page,
	source: Locator,
	target: Locator,
	offset: { x?: number; y?: number } = { x: 8, y: 8 },
) {
	await source.hover();
	await source.dispatchEvent('dragstart');
	await source.dispatchEvent('drag');
	await target.scrollIntoViewIfNeeded();
	const targetBox = await target.boundingBox();
	if (targetBox == null) {
		throw new Error('target was not visible');
	}

	const element = (
		await page.evaluateHandle(
			([x, y]) => document.elementFromPoint(x, y),
			[targetBox.x + (offset.x ?? 0), targetBox.y + (offset.y ?? 0)],
		)
	).asElement();
	if (!element) {
		throw new Error('failed to find element at point');
	}
	await element.dispatchEvent('dragover');
	await element.dispatchEvent('drop');
}
