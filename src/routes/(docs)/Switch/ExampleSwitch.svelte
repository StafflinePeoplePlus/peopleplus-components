<script lang="ts">
	import { InputLabel, Switch } from '$lib';
	import Typography from '$lib/Typography.svelte';

	let group: string[] = ['b'];
</script>

<div class="w-60 space-y-2">
	<div class="flex items-center justify-between">
		<InputLabel for="example">Enabled</InputLabel>
		<Switch name="example" id="example" />
	</div>

	<div class="flex items-center justify-between">
		<InputLabel for="example2">Disabled Checked</InputLabel>
		<Switch name="example2" id="example2" disabled checked />
	</div>

	<div class="flex items-center justify-between">
		<InputLabel for="example3">Disabled Unchecked</InputLabel>
		<Switch name="example3" id="example3" disabled />
	</div>

	<div class="space-y-2 pt-4">
		<Typography variant="caption">Example with bind:group</Typography>
		<div class="flex items-center justify-between">
			<InputLabel for="a">A</InputLabel>
			<Switch name="grouped" id="a" value="a" bind:group />
		</div>
		<div class="flex items-center justify-between">
			<InputLabel for="b">B</InputLabel>
			<Switch name="grouped" id="b" value="b" bind:group />
		</div>
		<div class="flex items-center justify-between">
			<InputLabel for="c">C</InputLabel>
			<Switch name="grouped" id="c" value="c" bind:group />
		</div>
		<pre>Value: {JSON.stringify(group)}</pre>
	</div>
</div>
