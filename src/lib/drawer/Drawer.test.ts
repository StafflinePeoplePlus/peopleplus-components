import ExampleDrawer from '../../routes/(docs)/Drawer/ExampleDrawer.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/svelte';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
afterEach(cleanup);

const OPEN_BUTTON = 'View Measurements';
const DRAWER = 'Size';

test('should show the drawer once "Open" is clicked', async () => {
	const { getByText } = render(ExampleDrawer);

	const openButton = getByText(OPEN_BUTTON);
	await fireEvent.click(openButton);

	const drawer = await getByText(DRAWER);
	expect(drawer).toBeInTheDocument();
});

test('should dismiss the drawer once "close" button is clicked', async () => {
	const { getByText, queryByText } = render(ExampleDrawer);

	const openButton = getByText(OPEN_BUTTON);
	await fireEvent.click(openButton);

	const closeButton = getByText('Close');
	await fireEvent.click(closeButton);
	await waitFor(() => {
		expect(queryByText(DRAWER)).toBeNull();
	});
});
