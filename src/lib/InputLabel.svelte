<script lang="ts">
	let forName = '';
	export { forName as for };
	let className = '';
	export { className as class };
</script>

<label
	for={forName}
	class="block mb-2 text-sm font-medium text-gray-900 dark:text-white {className}"
>
	<slot />
</label>
