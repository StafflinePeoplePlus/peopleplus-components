import { Locator, expect, test } from '@playwright/test';

const ITEM_GAP = 8;
const ITEM_WIDTH = 200;
const TOTAL_ITEMS = 10;
const ITEM_WIDTH_WITH_GAP = ITEM_WIDTH + ITEM_GAP;

test('Carousel next & previous', async ({ page, viewport }) => {
	if (!viewport) {
		throw new Error('test requires viewport');
	}

	await page.goto('/test/carousel');
	const carousel = page.getByRole('list');
	const prev = carousel.getByRole('button', { name: 'Previous Item' });
	const next = carousel.getByRole('button', { name: 'Next Item' });

	await expect(prev).toBeVisible();
	await expect(prev).toBeDisabled();
	await expect(next).toBeVisible();
	await expect(next).toBeEnabled();

	const visibleItems = Math.floor(viewport.width / ITEM_WIDTH_WITH_GAP);
	expect(await carousel.getByRole('listitem').all()).toHaveLength(visibleItems);

	await expectVisibleRange(carousel, 0, visibleItems);

	const liveregion = page.getByTestId('liveregion');
	// Scroll to the end one at a time
	let index = 0;
	while (index + visibleItems < TOTAL_ITEMS) {
		index += 1;
		await next.click();
		const [from, to] = [index + 1, visibleItems + index];
		await expectVisibleRange(carousel, from, to);
		await expectAnnouncedRange(liveregion, from, to);
	}

	await expect(prev).toBeEnabled();
	await expect(next).toBeDisabled();

	// Scroll to the beginning one at a time
	while (index > 0) {
		index -= 1;
		await prev.click();
		const [from, to] = [index + 1, visibleItems + index];
		await expectVisibleRange(carousel, from, to);
		await expectAnnouncedRange(liveregion, from, to);
	}

	await expect(prev).toBeDisabled();
	await expect(next).toBeEnabled();
});

async function expectVisibleRange(carousel: Locator, from: number, to: number) {
	const items = await carousel.getByRole('listitem', { includeHidden: true }).all();
	for (const [index, item] of items.entries()) {
		const inRange = from - 1 <= index && index < to;
		await expect(item).toHaveAttribute('aria-hidden', inRange ? 'false' : 'true');
	}
}
async function expectAnnouncedRange(liveregion: Locator, from: number, to: number) {
	if (from === to) {
		await expect(liveregion).toHaveText(`Item ${from} of ${TOTAL_ITEMS}`);
	} else {
		await expect(liveregion).toHaveText(`Items ${from} to ${to} of ${TOTAL_ITEMS}`);
	}
}
