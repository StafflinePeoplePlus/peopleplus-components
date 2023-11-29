import { test, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import TestGauge from '$lib/gauge/TestGauge.svelte';

afterEach(cleanup);

test('should render everything', () => {
	const { getByText } = render(TestGauge);

	getByText('90%');
	getByText('Start');
	getByText('End');
});
