import TestCard from './TestCard.svelte';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';

afterEach(cleanup);

test('should render everything', () => {
    const { getByText } = render(TestCard);

    getByText('This is a title');
    getByText('This is a subtitle');
    const primaryAction = getByText('Primary');

    expect(primaryAction.tagName).toBe('A');
    expect(primaryAction.getAttribute('href')).toBe('https://peopleplus.co.uk');
});
