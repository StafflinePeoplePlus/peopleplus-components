import { test, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import BasicNavbar from './test/BasicNavbar.svelte';

afterEach(cleanup);

test('should render the navbar', () => {
	const { getByText } = render(BasicNavbar);

	const title = getByText('PeoplePlus');
	getByText('Home');
	const about = getByText('About');
	getByText('Contact');

	expect(title.tagName).toBe('A');
	expect(title.getAttribute('href')).toBe('https://peopleplus.co.uk');
	expect(about.tagName).toBe('A');
	expect(about.getAttribute('href')).toBe('/about');
});
