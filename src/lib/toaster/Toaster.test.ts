import { afterEach, test } from 'vitest';
import { cleanup, fireEvent, render, waitForElementToBeRemoved } from '@testing-library/svelte';
import ExampleToaster from '../../routes/(docs)/Toaster/ExampleToaster.svelte';

afterEach(cleanup);

test('clicking buttons shows the toast messages and they disappear after timeout', async () => {
	const { getByRole, findByText } = render(ExampleToaster);

	const deleteButton = getByRole('button', { name: 'Delete' });
	const uploadButton = getByRole('button', { name: 'Upload' });

	await fireEvent.click(deleteButton);

	const successToast = await findByText('Changes successfully saved.');
	const errorToast = await findByText('Username you have entered is invalid.');

	await waitForElementToBeRemoved(successToast, { timeout: 3500 });
	await waitForElementToBeRemoved(errorToast, { timeout: 6500 });

	await fireEvent.click(uploadButton);
});
