import ExampleTooltip from '../../routes/(docs)/Tooltip/ExampleTooltip.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/svelte';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
afterEach(cleanup);

test('should render the tooltip once hovered', async () => {
	const { getByText, findByText, queryByText } = render(ExampleTooltip);

	const openButton = queryByText('Following');
	await fireEvent.mouseOver(openButton);
	let tooltip = await findByText('Click to unfollow');
	expect(tooltip).toBeInTheDocument();
	await fireEvent.mouseOut(openButton);

	const subscribeButton = getByText('Subscribe');
	await fireEvent.mouseOver(subscribeButton);
	tooltip = await findByText(
		'You can now subscribe to get stories delivered directly to your inbox'
	);
	expect(tooltip).toBeInTheDocument();
	await fireEvent.mouseOut(subscribeButton);
	tooltip = await findByText(
		'You can now subscribe to get stories delivered directly to your inbox'
	);
	expect(tooltip).not.toBeInTheDocument();
});
