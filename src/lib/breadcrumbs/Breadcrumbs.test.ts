import Breadcrumbs from '../../routes/(docs)/Breadcrumbs/ExampleBreadcrumbs.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, within } from '@testing-library/svelte';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
afterEach(cleanup);

test('should render breadcrumb items', () => {
	const { getByText } = render(Breadcrumbs);

	const findFlights = getByText('Find Flights');
	expect(findFlights.tagName).toBe('A');
	expect(findFlights.getAttribute('href')).toBe('#home');

	const canada = getByText('Canada');
	expect(canada.tagName).toBe('A');
	expect(canada.getAttribute('href')).toBe('#canada');
});

test('should not render an arrow after the last breadcrumb item', () => {
	const { getByText } = render(Breadcrumbs);
	const lastItem = getByText('Vancouver');
	const arrow = within(lastItem).queryByText('>');
	if (!arrow) {
		return;
	}
	throw new Error("'>' character found in the last breadcrumb item");
});
