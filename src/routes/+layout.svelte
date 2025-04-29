<script lang="ts">
	import { run } from 'svelte/legacy';

	import '../app.css';
	import { darkMode } from './darkMode';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		if ($page.url.searchParams.get('dark') === 'true') {
			$darkMode = true;
		}
	});

	run(() => {
		if (browser) {
			document.body.classList.toggle('dark', $darkMode);
		}
	});
</script>

{@render children?.()}
