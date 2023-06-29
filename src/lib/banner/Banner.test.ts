import TestBanner from './TestBanner.svelte';
import { test, expect, afterEach, vi } from 'vitest';
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

test('should trigger dismiss event once clicked', async () => {
	const { component, getByText } = render(TestBanner);
	const dismissButton = getByText('Dismiss');
	const dismiss = vi.fn();
	component.$on('dismiss', dismiss);
	fireEvent.click(dismissButton);
	expect(dismiss).toHaveBeenCalledOnce();
});
