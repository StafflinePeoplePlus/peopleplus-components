<script lang="ts">
	import { run } from 'svelte/legacy';

	import { actions, type UseActions } from '$lib/actions';
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = Omit<HTMLInputAttributes, 'type' | 'role' | `${string}:${string}`> & {
		use?: UseActions;
		group?: string[];
	};

	const dispatch = createEventDispatcher<{ change: boolean }>();

	
	interface Props {
		class?: $$Props['class'];
		checked?: $$Props['checked'];
		use?: UseActions;
		group?: string[];
		[key: string]: any
	}

	let {
		class: className = undefined,
		checked = $bindable(undefined),
		use = [],
		group = $bindable([]),
		...rest
	}: Props = $props();

	run(() => {
		if (rest.value != null && group.includes(rest.value) !== checked) {
			checked = group.includes(rest.value);
		}
	});
</script>

<input
	type="checkbox"
	role="switch"
	class={twMerge(
		"h-[26px] w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white p-0.5 align-top after:block after:h-5 after:w-5 after:rounded-full after:bg-gray-400 after:transition after:duration-150 after:content-[''] checked:border-primary-300 checked:bg-primary-200 checked:after:translate-x-[1.375rem] checked:after:bg-primary-500 focus:outline-none focus-visible:border-primary-400 focus-visible:ring-1 focus-visible:ring-primary-400 disabled:cursor-default disabled:border-gray-200 disabled:bg-gray-100 disabled:after:bg-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:after:bg-gray-500 dark:checked:border-primary-700 dark:checked:bg-primary-900 dark:checked:after:bg-white dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:after:bg-gray-700",
		className,
	)}
	{checked}
	use:actions={use}
	onchange={(evt) => {
		if (evt.currentTarget.checked) {
			group = [...group, evt.currentTarget.value];
		} else {
			group = group.filter((item) => item !== evt.currentTarget.value);
		}
		checked = evt.currentTarget.checked;
		dispatch('change', evt.currentTarget.checked);
	}}
	{...rest}
/>
