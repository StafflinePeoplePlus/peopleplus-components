<script lang="ts">
	import { Chip } from '../../lib/';

	let code = `
    <Chip />
  `;
</script>

<h1>Chip</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Chip />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
