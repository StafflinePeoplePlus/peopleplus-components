<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let code: string;
</script>

<pre
	class={twMerge(
		'whitespace-pre-wrap break-words rounded-md border border-gray-300 bg-gray-50 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700',
		className,
	)}><code class="font-mono text-sm">{code}</code></pre>
