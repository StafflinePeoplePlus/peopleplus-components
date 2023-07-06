<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let use: UseActions = [];
</script>

<ul
	class={twMerge(
		'flex flex-col font-medium md:mt-0 md:flex-row md:items-center md:gap-x-4',
		className
	)}
	use:actions={use}
>
	<slot />
</ul>
