<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		class?: string | undefined;
		use?: UseActions;
		children?: import('svelte').Snippet;
	}

	let { class: className = undefined, use = [], children }: Props = $props();
</script>

<li
	class={twMerge(
		"inline-flex items-center text-sm font-medium text-gray-700 after:pl-3 after:text-gray-400 after:content-['›'] last:text-gray-500 last:after:content-[''] hover:text-primary-600 last:hover:text-gray-500 dark:text-gray-400 dark:hover:text-primary-400 dark:last:hover:text-gray-400",
		className,
	)}
	use:actions={use}
>
	{@render children?.()}
</li>
