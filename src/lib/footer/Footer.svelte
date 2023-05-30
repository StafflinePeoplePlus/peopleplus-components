<script lang="ts">
	let className = '';
	export { className as class };
</script>

<footer class="rounded-lg bg-white shadow dark:bg-gray-800 {className}">
	<div
		class="mx-auto flex w-full max-w-screen-xl flex-col items-center space-y-1 p-4 md:flex-row md:justify-between"
	>
		<slot name="copyright" />
		<ul
			class="mt-3 flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 md:flex-wrap"
		>
			<slot name="links" />
		</ul>
	</div>
</footer>
