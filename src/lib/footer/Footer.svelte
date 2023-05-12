<script lang="ts">
	let className = '';
	export { className as class };
</script>

<footer class="bg-white rounded-lg shadow dark:bg-gray-800 {className}">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<slot />
	</div>
</footer>
