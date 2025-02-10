<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	
	interface Props {
		class?: string;
		use?: UseActions;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', use = [], children }: Props = $props();
</script>

<ul
	class={twMerge(
		'flex flex-col font-medium md:mt-0 md:flex-row md:items-center md:gap-x-4',
		className,
	)}
	use:actions={use}
>
	{@render children?.()}
</ul>
