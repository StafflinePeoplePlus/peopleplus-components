import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';
import CollapsibleTest from './TestCollapsible.svelte';

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
	await new Promise((resolve) => setTimeout(resolve, 4000));
	expect(content).toBeInTheDocument();
});
