<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { CheckIcon } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';

	let className: string | null | undefined = undefined;
	export { className as class };
	export let checkClass: string | null | undefined = undefined;
	export let selected = false;
	export let use: UseActions = [];
</script>

<button
	class={twMerge(
		'flex w-full items-center gap-1.5 px-2.5 py-1.5 hover:bg-primary-100 hover:text-primary-800 data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-800 dark:hover:bg-gray-600 dark:hover:text-white dark:data-[highlighted]:bg-gray-600 dark:data-[highlighted]:text-white',
		className,
	)}
	aria-selected={selected ? 'true' : 'false'}
	role="option"
	{...$$restProps}
	use:actions={use}
	on:click
	type="button"
>
	<CheckIcon size={16} class={twMerge('shrink-0', !selected && 'opacity-0', checkClass)} />

	<slot />
</button>
