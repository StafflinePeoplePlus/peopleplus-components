<script lang="ts">
	import { actions, type UseActions } from '../actions';
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };
	export let use: UseActions = [];
</script>

<aside
	class={twMerge(
		'z-10 flex h-full w-72 max-w-[100vw] shrink-0 flex-col overflow-y-auto bg-white p-4 shadow-lg md:shadow',
		className,
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</aside>
