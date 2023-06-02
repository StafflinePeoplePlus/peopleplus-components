<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleCookieConsent from './ExampleCookieConsent.svelte';
	import usage from './ExampleCookieConsent.svelte?raw';
</script>

<ExamplePage title="Cookie Consent" {usage}>
	<ExampleCookieConsent />
</ExamplePage>
