<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let startClass = '';
	export let middleClass = '';
	export let endClass = '';
	export let bottomClass = '';
</script>

<div class="bg-white p-4 sm:p-10 dark:bg-gray-700 max-w-screen-2xl 2xl:mx-auto text-sm">
	<div class={twMerge('lg:flex justify-between', className)}>
		<div class={twMerge('flex w-full md:w-auto', startClass)}>
			<slot name="start" />
		</div>
		<div class={twMerge('md:contents md:w-auto')}>
			<div class={twMerge('max-lg:my-5', middleClass)}>
				<slot name="middle" />
			</div>
			<div class={twMerge(endClass)}>
				<slot name="end" />
			</div>
		</div>
	</div>

	<div class={twMerge('border-t border-gray-100 mt-5 pt-5', bottomClass)}>
		<slot name="bottom" />
	</div>
</div>
