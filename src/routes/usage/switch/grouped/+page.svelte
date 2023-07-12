<script lang="ts">
	import { InputLabel, Switch } from '$lib';

	let group: string[] = ['b'];
</script>

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
