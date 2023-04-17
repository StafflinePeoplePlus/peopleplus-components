<script lang="ts">
	import { TitleDescription } from '../../lib/';

	let code = `
    <TitleDescription />
  `;
</script>

<h1>TitleDescription</h1>
<main>
	<pre class="bg-gray-100 p-4 rounded-md">
    <code>{code}</code>
  </pre>
</main>

<TitleDescription />

<style>
	pre code {
		font-family: 'Courier New', Courier, monospace;
		font-size: 14px;
	}
</style>
