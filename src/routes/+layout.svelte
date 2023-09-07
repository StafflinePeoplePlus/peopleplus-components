<script lang="ts">
	import '../app.css';
	import { darkMode } from './darkMode';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(() => {
		if ($page.url.searchParams.get('dark') === 'true') {
			$darkMode = true;
		}
	});

	$: if (browser) {
		document.body.classList.toggle('dark', $darkMode);
	}
</script>

<slot />
