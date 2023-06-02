<script lang="ts">
	import { InputLabel, Switch } from '$lib';
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
</div>
