<script lang="ts">
	let className = '';
	export { className as class };
</script>

<footer class="bg-white rounded-lg shadow dark:bg-gray-800 {className}">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<slot name="start" />
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<slot name="end" />
		</ul>
	</div>
</footer>
