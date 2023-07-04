import ExampleLoader from '../../routes/(docs)/Loader/ExampleLoader.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/svelte';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
afterEach(cleanup);

test('should show the loader when button is clicked', async () => {
	const { getByText, getByTestId } = render(ExampleLoader);

	const submitButton = getByText('Submit Form');
	await fireEvent.click(submitButton);

	const loader = getByTestId('loader');
	expect(loader).toBeInTheDocument();
});

test('should hide the loader after delay', async () => {
	const { getByText } = render(ExampleLoader);

	const submitButton = getByText('Submit Form');
	await fireEvent.click(submitButton);

	await waitFor(() => expect(submitButton).not.toHaveAttribute('disabled'), { timeout: 3000 });
});
