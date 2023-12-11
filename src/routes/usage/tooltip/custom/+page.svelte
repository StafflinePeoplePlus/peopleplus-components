<script lang="ts">
	import { InputArea, InputLabel, TextInput, Tooltip } from '$lib';
</script>

<!-- START USAGE -->
<Tooltip placement="right" class="mb-10">
	<InputLabel for="example">Password</InputLabel>
	<InputArea>
		<TextInput name="example" id="example" />
	</InputArea>

	<div slot="tooltip">
		Password should contain at least:
		<ul class="text-sm">
			<li>&check; 8 characters in length</li>
			<li>&check; Lower case letters (a-z)</li>
			<li>&check; Upper case letters (A-Z)</li>
			<li>&check; Numbers (i.e. 0-9)</li>
		</ul>
	</div>
</Tooltip>

<!-- END USAGE -->
