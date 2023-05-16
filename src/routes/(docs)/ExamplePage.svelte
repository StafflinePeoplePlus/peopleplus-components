<script lang="ts">
	import { CodeSnippet } from '$lib';

	export let title: string;
	export let usage: string;
</script>

<svelte:head>
	<title>{title} &middot; PeoplePlus Svelte Components</title>
</svelte:head>

<div class="flex h-full flex-col">
	<h1 class="text-xl font-semibold tracking-tight">{title}</h1>

	<h2 class="mb-2 mt-6 text-base font-medium">Usage</h2>
	<details>
		<summary>Show usage</summary>
		<CodeSnippet code={usage.replaceAll('$lib', 'pp-svelte-components')} />
	</details>

	<h2 class="mb-2 mt-6 text-base font-medium">Example</h2>
	<div class="relative -m-6 mt-0 grow p-6 pt-0">
		<slot />
	</div>
</div>
