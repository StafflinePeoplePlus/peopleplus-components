<script lang="ts">
	import { Tooltip } from '../../lib/';

	let code = `
    <Tooltip />
  `;
</script>

<h1>Tooltip</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Tooltip />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
