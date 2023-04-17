<script lang="ts">
	import { CookieBanner } from '../../lib/';

	let code = `
    <CookieBanner />
  `;
</script>

<h1>CookieBanner</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<CookieBanner />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
