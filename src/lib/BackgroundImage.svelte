<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	
	interface Props {
		class?: string;
		overlayClass?: string | undefined;
		src: string;
	}

	let { class: className = '', overlayClass = undefined, src }: Props = $props();
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
	<div class={twMerge('absolute inset-0 bg-gray-900/75', overlayClass)}></div>
</div>
