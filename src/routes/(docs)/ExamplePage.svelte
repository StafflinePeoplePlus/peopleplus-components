<script lang="ts">
	import { CodeSnippet } from '$lib';

	export let title: string;
	export let usage: string;
</script>

<svelte:head>
	<title>{title} &middot; PeoplePlus Svelte Components</title>
</svelte:head>

<div class="h-full flex flex-col">
	<h1 class="text-xl font-semibold tracking-tight">{title}</h1>

	<h2 class="mt-6 text-base font-medium mb-2">Usage</h2>
	<details>
		<summary>Show usage</summary>
		<CodeSnippet code={usage.replaceAll('$lib', 'pp-svelte-components')} />
	</details>

	<h2 class="mt-6 text-base font-medium mb-2">Example</h2>
	<div class="relative grow p-6 pt-0 mt-0 -m-6">
		<slot />
	</div>
</div>
