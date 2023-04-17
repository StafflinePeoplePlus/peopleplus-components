<script lang="ts">
	import { Footer } from '../../lib/';

	let code = `
    <Footer />
  `;
</script>

<h1>Footer</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<Footer />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
