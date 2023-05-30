import TestJumbotron from './TestJumbotron.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';

afterEach(cleanup);

test('should render everything', () => {
	const { getByText, getByTestId } = render(TestJumbotron);

	getByText('This is a title');
	getByText('This is a subtitle');
	const primaryAction = getByText('Primary');
	const secondaryAction = getByText('Secondary');
	const image = getByTestId('background-image');

	expect(primaryAction.tagName).toBe('A');
	expect(primaryAction.getAttribute('href')).toBe('https://peopleplus.co.uk');
	expect(secondaryAction.tagName).toBe('A');
	expect(secondaryAction.getAttribute('href')).toBe('https://learningplus.co.uk');
	expect(image.getAttribute('src')).toBe('/jumbotron.jpg');
});
