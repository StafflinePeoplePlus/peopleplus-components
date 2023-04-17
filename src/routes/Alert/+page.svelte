<script lang="ts">
	import { Alert } from '../../lib/';

	let code = `
    <Alert />
  `;
</script>

<h1>Alert</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Alert />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
