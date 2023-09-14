import Breadcrumbs from './test/BreadcrumbsTest.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, within } from '@testing-library/svelte';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
afterEach(cleanup);

const ITEM_LABEL_1 = 'Find Flights';
const ITEM_LINK_1 = '#home';
const ITEM_LABEL_2 = 'Canada';
const ITEM_LINK_2 = '#canada';
const LAST_ITEM = 'Vancouver';

test('should render breadcrumb items', () => {
	const { getByText } = render(Breadcrumbs);

	const findFlights = getByText(ITEM_LABEL_1);
	expect(findFlights.tagName).toBe('A');
	expect(findFlights.getAttribute('href')).toBe(ITEM_LINK_1);

	const canada = getByText(ITEM_LABEL_2);
	expect(canada.tagName).toBe('A');
	expect(canada.getAttribute('href')).toBe(ITEM_LINK_2);
});

test('should not render an arrow after the last breadcrumb item', () => {
	const { getByText } = render(Breadcrumbs);
	const lastItem = getByText(LAST_ITEM);
	const arrow = within(lastItem).queryByText('>');
	expect(arrow).toBeNull();
});
