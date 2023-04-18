<script lang="ts">
	import { PrimaryButton } from '../../lib/';

	let code = `
    <PrimaryButton />
  `;
</script>

<h1>PrimaryButton</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<PrimaryButton />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
