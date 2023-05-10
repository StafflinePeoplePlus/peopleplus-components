<script lang="ts">
	let className = '';
	export { className as class };
	export let code: string;
</script>

<pre
	class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md {className} whitespace-pre-wrap break-words"><code
		class="font-mono text-sm">{code}</code
	></pre>
