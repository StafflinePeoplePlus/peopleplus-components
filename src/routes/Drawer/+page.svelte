<script lang="ts">
	import { Drawer } from '../../lib/';

	let code = `
    <Drawer />
  `;
</script>

<h1>Drawer</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Drawer />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
