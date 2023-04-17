<script lang="ts">
	import { Jumbotron } from '../../lib/';

	let code = `
    <Jumbotron />
  `;
</script>

<h1>Jumbotron</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Jumbotron />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
