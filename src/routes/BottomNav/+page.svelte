<script lang="ts">
	import { BottomNav } from '../../lib/';

	let code = `
    <BottomNav />
  `;
</script>

<h1>BottomNav</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<BottomNav />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
