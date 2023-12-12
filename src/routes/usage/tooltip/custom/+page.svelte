<script lang="ts">
	import { InputLabel, Tooltip } from '$lib';
</script>

<!-- START USAGE -->
<Tooltip placement="right" class="mb-10" tooltipClass="text-xs rounded">
	<InputLabel for="example">Password</InputLabel>
	<div>
		<input name="example" id="example" type="password" class="rounded border p-2 mt-1" />
	</div>

	<div slot="tooltip">
		Password should contain at least:
		<ul>
			<li>&check; 8 characters in length</li>
			<li>&check; Lower case letters (a-z)</li>
			<li>&check; Upper case letters (A-Z)</li>
			<li>&check; Numbers (i.e. 0-9)</li>
		</ul>
	</div>
</Tooltip>
<!-- END USAGE -->
