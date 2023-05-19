<script lang="ts">
	import { Card } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	import usage from './ExampleCard.svelte?raw';
</script>

<ExamplePage title="Card" {usage}>
	<Card
		img="/jumbotron.jpg"
		imgHeight="200px"
		action="Learn More"
		actionHref="#card"
		title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		subtitle=" Mauris auctor cursus nibh, vitae lacinia nunc consequat id. Integer luctus nunc ut lorem lobortis, eu sagittis nisi varius. Sed sit amet nulla at nunc egestas placerat. Sed aliquet, nisi id tincidunt tristique, enim metus vestibulum justo, vitae rutrum mi mi ac nisi."
	/>
</ExamplePage>
