import { test, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import ExampleFooter from './test/FooterTest.svelte';

afterEach(cleanup);

test('should render the policy', () => {
	const { getByText } = render(ExampleFooter);
	const policy = getByText('Privacy Policy');
	expect(policy.tagName).toBe('A');
	expect(policy.getAttribute('href')).toBe('#privacy');
});

test('should render an email', () => {
	const { getByText } = render(ExampleFooter);
	const email = getByText('customerexperience@peopleplus.co.uk');
	expect(email.tagName).toBe('A');
	expect(email.getAttribute('href')).toBe('mailto:customerexperience@peopleplus.co.uk');
});
