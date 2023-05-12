<script lang="ts">
	let forName = '';
	export { forName as for };
	let className = '';
	export { className as class };
</script>

<label for={forName} class={className}>
	<slot />
</label>
