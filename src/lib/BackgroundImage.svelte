<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let overlayClass: string | undefined = undefined;
	export let src: string;
</script>

<div class="absolute inset-0 -z-10">
	{#if src}
		<img
			data-testid="background-image"
			class={twMerge('absolute inset-0 h-full w-full object-cover', className)}
			{src}
			alt=""
			aria-hidden="true"
		/>
	{/if}
	<div class={twMerge('absolute inset-0 bg-gray-900/75', overlayClass)} />
</div>
