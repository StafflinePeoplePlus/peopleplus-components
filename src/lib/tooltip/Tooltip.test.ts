import TestTooltip from './TestTooltip.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/svelte';

afterEach(cleanup);

test('should render tooltip content when hovered', async () => {
	const { getByText } = render(TestTooltip);

	const tooltipTrigger = getByText('Component');

	await fireEvent.focus(tooltipTrigger);
	await new Promise((r) => setTimeout(r, 500));
	const tooltipContent = getByText('Content');
	expect(tooltipContent).toBeVisible();
});
