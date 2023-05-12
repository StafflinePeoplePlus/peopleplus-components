<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleCarousel from './ExampleCarousel.svelte';
	import usage from './ExampleCarousel.svelte?raw';
</script>

<ExamplePage title="Carousel" {usage}>
	<ExampleCarousel />
</ExamplePage>
