<script lang="ts">
	import { InputLabel, Tooltip } from '$lib';
</script>

<!-- START USAGE -->
<InputLabel for="example">Password</InputLabel>
<Tooltip placement="right" tooltipClass="text-xs rounded" closeOnPointerDown={false}>
	<input name="example" id="example" type="password" class="mt-1 rounded border p-2" />

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
