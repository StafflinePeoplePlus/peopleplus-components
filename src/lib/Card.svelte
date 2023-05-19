<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let img: string | undefined = undefined;
	export let imgHeight: string | undefined = undefined;
	export let action: string | undefined = undefined;
	export let actionHref: string | undefined = undefined;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export { className as class };
	let className = '';
</script>

<div class="w-full rounded-xl border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 {className}">
	{#if img}
		<div class="relative h-80 rounded-xl bg-cover bg-center" style="height: {imgHeight}; background-image: url('{img}');" />
	{/if}
	<div class="px-6 py-4">
		<div class="mb-2 text-xl font-bold">{title}</div>
		<p class="text-base text-gray-700">{subtitle}</p>
		{#if action}
			<a
					href={actionHref ?? '#'}
					class="mt-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					on:click={() => dispatch('action')}
			>
				{action}
			</a>
		{/if}
	</div>
</div>
