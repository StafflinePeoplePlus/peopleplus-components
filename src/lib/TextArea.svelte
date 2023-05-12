<script lang="ts">
	export let name: string;
	export let id: string;
	export let rows: number;
	let className = '';
	export { className as class };
</script>

<textarea {name} {id} {rows} class={className} />
