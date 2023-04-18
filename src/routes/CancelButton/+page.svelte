<script lang="ts">
	import { CancelButton } from '../../lib/';

	let code = `
    <CancelButton />
  `;
</script>

<h1>Accordion</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<CancelButton />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
