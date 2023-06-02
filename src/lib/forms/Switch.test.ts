import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';
import Switch from './Switch.svelte';

afterEach(cleanup);

test('should update checked when switch is toggled', () => {
	const { getByRole, component } = render(Switch, { checked: true });

	const toggle = getByRole('switch');
	fireEvent.click(toggle);
	expect(component.checked).toBe(false);
	fireEvent.click(toggle);
	expect(component.checked).toBe(true);
});

test('should fire change event when switch is toggled', () => {
	const { getByRole, component } = render(Switch);

	const toggle = getByRole('switch');
	const onChange = vi.fn((evt: CustomEvent<boolean>) => evt.detail);
	component.$on('change', onChange);
	fireEvent.click(toggle);
	expect(onChange).toHaveReturnedWith(true);
	fireEvent.click(toggle);
	expect(onChange).toHaveReturnedWith(false);
});
