import Jumbotron from '$lib/Jumbotron.svelte';
import { test, expect, vi, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';

afterEach(cleanup);

const backgroundImage = '/jumbotron.jpg';

test('should render the with all props', () => {
	const { getByText, getByTestId } = render(Jumbotron, {
		title: 'This is a title',
		subtitle: 'This is a subtitle',
		primaryAction: 'Primary',
		primaryActionHref: 'https://peopleplus.co.uk',
		secondaryAction: 'Secondary',
		secondaryActionHref: 'https://learningplus.co.uk',
		image: backgroundImage
	});

	getByText('This is a title');
	getByText('This is a subtitle');
	const primaryAction = getByText('Primary');
	const secondaryAction = getByText('Secondary');
	const image = getByTestId('background-image');

	expect(primaryAction.tagName).toBe('A');
	expect(primaryAction.getAttribute('href')).toBe('https://peopleplus.co.uk');
	expect(secondaryAction.tagName).toBe('A');
	expect(secondaryAction.getAttribute('href')).toBe('https://learningplus.co.uk');
	expect(image.getAttribute('src')).toBe(backgroundImage);
});

test('should render with minimal props', () => {
	const { getByText, queryAllByText } = render(Jumbotron, {
		title: 'This is a title'
	});

	getByText('This is a title');
	expect(queryAllByText('undefined')).toHaveLength(0);
});

test('should fire the action events on click', () => {
	const { component, getByText } = render(Jumbotron, {
		title: 'Jumbotron',
		primaryAction: 'Primary',
		secondaryAction: 'Secondary'
	});

	const onPrimaryAction = vi.fn();
	const onSecondaryAction = vi.fn();
	component.$on('primaryAction', onPrimaryAction);
	component.$on('secondaryAction', onSecondaryAction);
	fireEvent.click(getByText('Primary'));
	fireEvent.click(getByText('Secondary'));
	expect(onPrimaryAction).toHaveBeenCalledOnce();
	expect(onSecondaryAction).toHaveBeenCalledOnce();
});
