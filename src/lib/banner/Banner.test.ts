import TestBanner from './TestBanner.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';

afterEach(cleanup);

test('should render everything', () => {
	const { getByText } = render(TestBanner);

	getByText('Banner Title');
	getByText('Banner Description');

	const primaryAction = getByText('Learn More');
	expect(primaryAction.tagName).toBe('A');
	expect(primaryAction.getAttribute('href')).toBe('https://peopleplus.co.uk');
});

test('should dismiss the banner once clicked', () => {
	const dismissButton = getByText('Dismiss');
	expect(dismissButton).toBeInTheDocument();
	fireEvent.click(dismissButton);

	expect(queryByText('Banner Title')).not.toBeInTheDocument();
	expect(queryByText('Banner Description')).not.toBeInTheDocument();
});
