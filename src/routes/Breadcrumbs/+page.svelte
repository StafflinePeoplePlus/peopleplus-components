<script lang="ts">
	import { Breadcrumbs } from '../../lib/';

	let code = `
    <Breadcrumbs />
  `;
</script>

<h1>Breadcrumbs</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Breadcrumbs />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
