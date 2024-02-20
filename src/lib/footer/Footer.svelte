<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let startClass = '';
	export let middleClass = '';
	export let endClass = '';
	export let bottomClass = '';
	export let use: UseActions = [];
</script>

<footer
	class={twMerge(
		'max-w-screen-2xl bg-white p-2 text-sm dark:bg-gray-800 sm:p-10 2xl:mx-auto',
		className,
	)}
	use:actions={use}
	{...$$restProps}
>
	<div class="md:flex flex-row">
		<div class={twMerge('md:basis-1/2 p-4', startClass)}>
			<slot name="start" />
		</div>
		<div class={twMerge('md:basis-1/3 p-4', middleClass)}>
			<slot name="middle" />
		</div>
		<div class={twMerge('md:basis-1/4 p-4', endClass)}>
			<slot name="end" />
		</div>
	</div>

	<div class={twMerge('mt-4 border-t border-gray-100 pt-5 dark:border-gray-700', bottomClass)}>
		<slot name="bottom" />
	</div>
</footer>
