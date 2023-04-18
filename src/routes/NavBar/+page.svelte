<script lang="ts">
	import { NavBar } from '../../lib/';

	let code = `
    <NavBar />
  `;
</script>

<h1>NavBar</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<NavBar />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
