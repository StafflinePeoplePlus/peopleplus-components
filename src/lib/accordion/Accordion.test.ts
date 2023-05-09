import { test, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/svelte';
import AccordionGroupTest from './test/AccordionGroupTest.svelte';
import AccordionStandaloneTest from './test/AccordionStandaloneTest.svelte';

afterEach(cleanup);

test('should render accordions in group', () => {
	const { getByText } = render(AccordionGroupTest);

	getByText('Accordion 1');
	getByText('Accordion 2');
	getByText('Accordion 3');
	getByText('Content 1');
	getByText('Content 2');
	getByText('Content 3');
});

test('should render an accordion', () => {
	const { getByText } = render(AccordionStandaloneTest);

	getByText('Label');
	getByText('Content');
});

test('should toggle the content when clicking the label', async () => {
	const { getByText } = render(AccordionStandaloneTest);

	const label = getByText('Label');
	const content = getByText('Content');

	expect(content.className).toContain('hidden');
	await fireEvent.click(label);
	expect(content.className).not.toContain('hidden');
});

test('should close other accordions in group when exclusive', async () => {
	const { getByText } = render(AccordionGroupTest, { exclusive: true });

	const accordion1 = getByText('Accordion 1');
	const content1 = getByText('Content 1');
	const accordion2 = getByText('Accordion 2');
	const content2 = getByText('Content 2');

	await fireEvent.click(accordion1);
	expect(content1.className).not.toContain('hidden');
	await fireEvent.click(accordion2);
	expect(content2.className).not.toContain('hidden');
	expect(content1.className).toContain('hidden');
});
