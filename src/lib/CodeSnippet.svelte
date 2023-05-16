<script lang="ts">
	let className = '';
	export { className as class };
	export let code: string;
</script>

<pre
	class="rounded-md bg-gray-100 p-4 dark:bg-gray-700 {className} whitespace-pre-wrap break-words"><code
		class="font-mono text-sm">{code}</code
	></pre>
