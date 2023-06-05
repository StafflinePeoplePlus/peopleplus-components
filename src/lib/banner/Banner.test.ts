import TestBanner from './TestBanner.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render, waitForElementToBeRemoved } from '@testing-library/svelte';

afterEach(cleanup);

test('should render everything', () => {
	const { getByText } = render(TestBanner);

	getByText('Banner Title');
	getByText('Banner Description');

	const primaryAction = getByText('Learn More');
	expect(primaryAction.tagName).toBe('A');
	expect(primaryAction.getAttribute('href')).toBe('https://peopleplus.co.uk');
});

test('should dismiss the banner once clicked', async () => {
	const { getByText, queryByText } = render(TestBanner);
	getByText('Banner Title');

	const dismissButton = getByText('Dismiss');
	fireEvent.click(dismissButton);

	await waitForElementToBeRemoved(() => queryByText('Banner Title'));

	expect(queryByText('Banner Title')).to.not.exist;
});
