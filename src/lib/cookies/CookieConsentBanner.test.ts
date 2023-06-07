import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';
import CookieConsentBanner from './CookieConsentBanner.svelte';

afterEach(cleanup);

const categories = [
	{ title: 'Category 1', body: 'Category body', name: 'category-1' },
	{ title: 'Category 2', body: 'Category body', name: 'category-2' },
	{ title: 'Category 3', body: 'Category body', name: 'category-3' }
];
test('clicking customise shows the categories', async () => {
	const { getByRole, queryByRole } = render(CookieConsentBanner, { categories });

	const customiseButton = getByRole('button', { name: 'Customise cookies' });

	expect(queryByRole('switch', { name: 'Category 1' })).toBeNull();
	await fireEvent.click(customiseButton);
	expect(queryByRole('switch', { name: 'Category 1' })).not.toBeNull();
});

test('clicking accept all button fires the accept event', async () => {
	const { getByRole, component } = render(CookieConsentBanner, { categories });

	const button = getByRole('button', { name: 'Accept all cookies' });
	const onAccept = vi.fn();
	component.$on('accept', onAccept);
	await fireEvent.click(button);
	expect(onAccept).toHaveBeenCalledOnce();
});

test('clicking reject all button fires the reject event', async () => {
	const { getByRole, component } = render(CookieConsentBanner, { categories });

	await fireEvent.click(getByRole('button', { name: 'Customise cookies' }));

	const button = getByRole('button', { name: 'Reject all cookies' });
	const onReject = vi.fn();
	component.$on('reject', onReject);
	await fireEvent.click(button);
	expect(onReject).toHaveBeenCalledOnce();
});

test('clicking save button fires the save event with the correct consent', async () => {
	const { getByRole, component } = render(CookieConsentBanner, {
		categories,
		consent: { 'category-2': true }
	});

	await fireEvent.click(getByRole('button', { name: 'Customise cookies' }));

	const button = getByRole('button', { name: 'Save and close' });
	const onSave = vi.fn((evt: CustomEvent<Record<string, boolean | undefined>>) => evt.detail);
	component.$on('save', onSave);
	await fireEvent.click(button);
	expect(onSave).toHaveReturnedWith({
		'category-1': false,
		'category-2': true,
		'category-3': false
	});
});
