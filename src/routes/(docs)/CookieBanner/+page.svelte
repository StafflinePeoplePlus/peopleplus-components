<script lang="ts">
	import { CookieBanner } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<CookieBanner />';
</script>

<ExamplePage title="CookieBanner" {usage}>
	<CookieBanner absolute />
</ExamplePage>
