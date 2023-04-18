<script lang="ts">
	import { Modal } from '../../lib/';

	let code = `
    <Modal />
  `;
</script>

<h1>Modal</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Modal />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
