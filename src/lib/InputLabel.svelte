<script lang="ts">
	let forName = '';
	let className = '';
	export { forName as for, className as class };
</script>

<label
	for={forName}
	class="block mb-2 text-sm font-medium text-gray-900 dark:text-white {className}"
>
	<slot />
</label>
