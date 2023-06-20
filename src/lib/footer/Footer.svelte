<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let startClass = '';
	export let middleClass = '';
	export let endClass = '';
</script>

<div class={twMerge('lg:flex text-sm justify-between bg-white p-4 sm:p-10 dark:bg-gray-700 max-w-screen-2xl 2xl:mx-auto', className)}>
	<div class={twMerge('flex w-full md:w-auto', startClass)}>
		<slot name="start" />
	</div>
	<div class={twMerge('md:contents md:w-auto')}>
		<div class={twMerge('max-lg:mt-5', middleClass)}>
			<slot name="middle" />
		</div>
		<div class={twMerge('max-lg:mt-5', $$slots.middle, endClass)}>
			<slot name="end" />
		</div>
	</div>
</div>
