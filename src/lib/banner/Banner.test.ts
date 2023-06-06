import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';
import ExampleBanner from '../../routes/(docs)/Banner/ExampleBanner.svelte';

afterEach(cleanup);

test('should render everything', () => {
	const { getByText } = render(ExampleBanner);

	getByText(`'The Lyrics, The Music & The Money'`);

	const primaryAction = getByText('View Course');
	expect(primaryAction.tagName).toBe('A');
	expect(primaryAction.getAttribute('href')).toBe('https://peopleplus.co.uk');
});

test('should dismiss the banner once clicked', async () => {
	const { getByText, queryByText } = render(ExampleBanner);

	const dismissButton = getByText('Dismiss');
	fireEvent.click(dismissButton);

	expect(queryByText('The Lyrics, The Music & The Money')).to.not.exist;
});
