<script lang="ts">
	let forName = '';
	export { forName as for };
</script>

<label for={forName} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
	<slot />
</label>
