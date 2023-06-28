import ExampleChip from './ExampleChip.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';

afterEach(cleanup);

test('should render a chip', () => {
	const { getByText } = render(ExampleChip);
	expect(getByText('Primary')).toBeTruthy();
	expect(getByText('Open Now')).toBeTruthy();
});
