import ExampleDrawer from './test/DrawerTest.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';

afterEach(cleanup);

const OPEN_BUTTON = 'Open Measurements';
const DRAWER = 'Size';
const CLOSE_BUTTON = 'closeDrawer';

test('should show the drawer once "Open" is clicked', async () => {
	const { getByText } = render(ExampleDrawer);

	const openButton = getByText(OPEN_BUTTON);
	await fireEvent.click(openButton);

	const drawer = await getByText(DRAWER);
	expect(drawer).toBeInTheDocument();
});

test('should dismiss the drawer once "close" button is clicked', async () => {
	const { getByText, getByTestId, queryByTestId } = render(ExampleDrawer);

	const openButton = getByText(OPEN_BUTTON);
	await fireEvent.click(openButton);

	const closeButton = getByTestId(CLOSE_BUTTON);
	await fireEvent.click(closeButton);

	await new Promise((resolve) => setTimeout(resolve, 4000));

	const drawer = queryByTestId(DRAWER);
	expect(drawer).not.toBeInTheDocument();
});
