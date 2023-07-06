<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface $$Events {
		change: CustomEvent<boolean>;
	}
	type $$Props = Omit<HTMLInputAttributes, 'type' | 'role' | `${string}:${string}`> & {
		use?: UseActions;
	};

	const dispatch = createEventDispatcher();

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let checked: $$Props['checked'] = undefined;
	export let use: UseActions = [];
</script>

<input
	type="checkbox"
	role="switch"
	class={twMerge(
		"h-[26px] w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white p-0.5 align-top after:block after:h-5 after:w-5 after:rounded-full after:bg-gray-400 after:transition after:duration-150 after:content-[''] checked:after:translate-x-[1.375rem] checked:after:bg-red-500 focus:outline-none focus-visible:border-primary-400 focus-visible:ring-1 focus-visible:ring-primary-400 disabled:cursor-default disabled:border-gray-200 disabled:bg-gray-100 disabled:after:bg-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:after:bg-gray-500 dark:checked:after:bg-white dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:after:bg-gray-700",
		className
	)}
	bind:checked
	use:actions={use}
	on:change={(evt) => dispatch('change', evt.currentTarget.checked)}
	{...$$restProps}
/>
