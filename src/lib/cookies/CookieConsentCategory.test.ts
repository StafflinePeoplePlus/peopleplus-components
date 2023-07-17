import matchers from '@testing-library/jest-dom/matchers';
import { afterEach, expect, test } from 'vitest';
import { act, cleanup, render } from '@testing-library/svelte';
import CookieConsentCategory from './CookieConsentCategory.svelte';

expect.extend(matchers);

afterEach(cleanup);

test('should reflect properties in the dom', async () => {
	const { getByRole, findAllByRole, getByText, queryByText, queryByRole, component } = render(
		CookieConsentCategory,
		{
			title: 'Category Title',
			body: 'Category body',
			name: 'category-name',
			required: false,
			checked: false,
			expanded: false,
			cookies: [
				{
					name: 'cookie 1',
					provider: 'provider 1',
					purpose: 'purpose 1',
					expiration: 'expiration 1',
				},
				{
					name: 'cookie 2',
					provider: 'provider 2',
					purpose: 'purpose 2',
					expiration: 'expiration 2',
				},
			],
		},
	);

	const toggle = getByRole('switch', { name: 'Category Title' });
	expect(getByText('Category body')).toBeInTheDocument();
	expect(toggle).toHaveAttribute('name', 'category-name');

	expect(toggle).not.toBeChecked();
	await act(() => component.$set({ checked: true }));
	expect(toggle).toBeChecked();

	expect(queryByText('View Cookies')).not.toBeNull();
	await act(() => component.$set({ expanded: true }));
	expect(queryByText('View Cookies')).toBeNull();

	expect(queryByRole('switch', { name: 'Category Title' })).not.toBeNull();
	await act(() => component.$set({ required: true }));
	expect(queryByRole('switch', { name: 'Category Title' })).toBeNull();

	const rows = await findAllByRole('row');
	expect(rows).toHaveLength(3);
	expect(rows[1].childElementCount).toBe(4);
	expect(rows[1].children[0]).toHaveTextContent('cookie 1');
	expect(rows[1].children[1]).toHaveTextContent('provider 1');
	expect(rows[1].children[2]).toHaveTextContent('expiration 1');
	expect(rows[1].children[3]).toHaveTextContent('purpose 1');
	expect(rows[2].childElementCount).toBe(4);
	expect(rows[2].children[0]).toHaveTextContent('cookie 2');
	expect(rows[2].children[1]).toHaveTextContent('provider 2');
	expect(rows[2].children[2]).toHaveTextContent('expiration 2');
	expect(rows[2].children[3]).toHaveTextContent('purpose 2');
});
