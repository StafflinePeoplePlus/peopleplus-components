<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let startClass = '';
	export let middleClass = '';
	export let endClass = '';
	export let bottomClass = '';
</script>

<div
	class={twMerge(
		'max-w-screen-2xl bg-white p-4 text-sm dark:bg-gray-700 sm:p-10 2xl:mx-auto',
		className
	)}
	{...$$restProps}
>
	<div class={'justify-between lg:flex'}>
		<div class={twMerge('flex w-full md:w-auto', startClass)}>
			<slot name="start" />
		</div>
		<div class={'md:contents md:w-auto'}>
			<div class={twMerge('max-lg:my-5', middleClass)}>
				<slot name="middle" />
			</div>
			<div class={endClass}>
				<slot name="end" />
			</div>
		</div>
	</div>

	<div class={twMerge('mt-5 border-t border-gray-100 pt-5', bottomClass)}>
		<slot name="bottom" />
	</div>
</div>
