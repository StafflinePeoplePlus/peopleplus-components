import { test, expect, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';
import CollapsibleTest from './TestCollapsible.svelte';

Element.prototype.animate ??= vi.fn().mockReturnValue({
	finished: Promise.resolve(),
	cancel: vi.fn(),
	startTime: null,
	currentTime: null,
});

afterEach(cleanup);

test('should render a collapsible', () => {
	const { getByText } = render(CollapsibleTest);

	getByText('Label');
});

test('should toggle the content when clicking the label', async () => {
	const { getByText } = render(CollapsibleTest);

	const label = getByText('Label');
	await fireEvent.click(label);
	const content = getByText('Content');
	expect(content).toBeInTheDocument();
});
