<script lang="ts">
	import { TextInput, InputLabel, InputError, InputArea } from '$lib';
</script>

<div class="space-y-2">
	<!-- START USAGE -->
	<InputLabel for="example">Label</InputLabel>
	<InputArea>
		<TextInput name="example" id="example" />
	</InputArea>
	<InputError>This is an error...</InputError>
	<!-- END USAGE -->
</div>
