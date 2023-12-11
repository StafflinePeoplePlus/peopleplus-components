import TestTooltip from './TestTooltip.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/svelte';

afterEach(cleanup);

test('should render tooltip content when hovered', async () => {
	const { getByText, getByTestId } = render(TestTooltip);

	const tooltipTrigger = getByText('Tooltip Component');

	await fireEvent.mouseOver(tooltipTrigger);
	await new Promise((r) => setTimeout(r, 1000));
	const tooltipContent = getByTestId('content');
	expect(tooltipContent).toBeVisible();
});
