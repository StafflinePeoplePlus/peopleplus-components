import { afterEach, expect, test, vi } from 'vitest';
import { act, cleanup, fireEvent, render } from '@testing-library/svelte';
import CookieConsentManagement from './CookieConsentManagement.svelte';

afterEach(cleanup);
const categories = [
	{ title: 'Category 1', body: 'Category body', name: 'category-1' },
	{ title: 'Category 2', body: 'Category body', name: 'category-2' },
	{ title: 'Category 3', body: 'Category body', name: 'category-3' },
];
test('category switches reflect the given consent', async () => {
	const { getByRole, component } = render(CookieConsentManagement, {
		categories,
		consent: { 'category-1': true, 'category-2': false },
	});

	const cat1 = getByRole('switch', { name: 'Category 1' });
	const cat2 = getByRole('switch', { name: 'Category 2' });
	const cat3 = getByRole('switch', { name: 'Category 3' });

	expect(cat1).toBeChecked();
	expect(cat2).not.toBeChecked();
	expect(cat3).not.toBeChecked();
	await act(() =>
		component.$set({ consent: { 'category-1': false, 'category-2': false, 'category-3': true } }),
	);
	expect(cat1).not.toBeChecked();
	expect(cat2).not.toBeChecked();
	expect(cat3).toBeChecked();
});

test('clicking save button fires the save event with the selected consent', async () => {
	const { getByRole, component } = render(CookieConsentManagement, { categories, consent: {} });

	const cat2 = getByRole('switch', { name: 'Category 2' });
	await fireEvent.click(cat2);

	const saveButton = getByRole('button', { name: 'Save changes' });
	const onSave = vi.fn((evt: CustomEvent<Record<string, boolean | undefined>>) => evt.detail);
	component.$on('save', onSave);
	await fireEvent.click(saveButton);
	expect(onSave).toHaveReturnedWith({
		'category-1': false,
		'category-2': true,
		'category-3': false,
	});
});
