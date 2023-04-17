<script lang="ts">
	import { Dropdown } from '../../lib/';

	let code = `
    <Dropdown />
  `;
</script>

<h1>Dropdown</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Dropdown />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
