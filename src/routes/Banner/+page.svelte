<script lang="ts">
	import { Banner } from '../../lib/';

	let code = `
    <Banner />
  `;
</script>

<h1>Banner</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Banner />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
