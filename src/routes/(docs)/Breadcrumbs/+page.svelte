<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleBreadcrumbs from './ExampleBreadcrumbs.svelte';
	import usage from './ExampleBreadcrumbs.svelte?raw';
</script>

<ExamplePage title="Breadcrumbs" {usage}>
	<ExampleBreadcrumbs />
</ExamplePage>
