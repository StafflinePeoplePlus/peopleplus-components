import Stepper from '$lib/Stepper.svelte';
import { test, expect, vi, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';

const steps = [{ label: 'Step 1' }, { label: 'Step 2', foo: 'bar' }, { label: 'Step 3' }];

afterEach(cleanup);

test('should render the steps', () => {
	const { getByText, getAllByText } = render(Stepper, { steps });

	getByText('Step 1');
	getByText('Step 2');
	getByText('Step 3');
	expect(getAllByText('»')).toHaveLength(2);
});

test('should fire the changeStep event on step click', () => {
	const { component, getByText } = render(Stepper, { steps });

	const step2 = getByText('Step 2');
	const changeStep = vi.fn((evt) => expect(evt.detail).toBe(steps[1]));
	component.$on('changeStep', changeStep);
	fireEvent.click(step2);
	expect(changeStep).toHaveBeenCalledOnce();
});
