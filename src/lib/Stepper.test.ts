import Stepper from '$lib/Stepper.svelte';
import { test, expect, vi, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';

const steps = [{ label: 'Step 1' }, { label: 'Step 2', foo: 'bar' }, { label: 'Step 3' }];

afterEach(cleanup);

test('should render the steps', () => {
	const { getByText } = render(Stepper, { steps });

	expect(getByText('Step 1')).toHaveAttribute('aria-current', 'step');
	expect(getByText('Step 2')).toHaveAttribute('aria-current', 'false');
	expect(getByText('Step 3')).toHaveAttribute('aria-current', 'false');
});

test('should fire the changeStep event on step click', () => {
	const { component, getByText } = render(Stepper, { steps });

	const step2 = getByText('Step 2');
	const changeStep = vi.fn((evt) => expect(evt.detail).toBe(steps[1]));
	component.$on('changeStep', changeStep);
	fireEvent.click(step2);
	expect(changeStep).toHaveBeenCalledOnce();
});

test('should mark the provided step as active', () => {
	const { getByText } = render(Stepper, { steps, activeStep: steps[1] });
	expect(getByText('Step 1')).toHaveAttribute('aria-current', 'false');
	expect(getByText('Step 2')).toHaveAttribute('aria-current', 'step');
	expect(getByText('Step 3')).toHaveAttribute('aria-current', 'false');
});
