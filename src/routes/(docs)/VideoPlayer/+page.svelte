<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleVideoPlayer from './ExampleVideoPlayer.svelte';
	import usage from './ExampleVideoPlayer.svelte?raw';
</script>

<ExamplePage title="Video Player" {usage}>
	<ExampleVideoPlayer />
</ExamplePage>
