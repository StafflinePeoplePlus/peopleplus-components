<script lang="ts">
	import { TextInput, InputLabel, InputError, InputArea } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel for="example">Label</InputLabel>
	<InputArea>
		<TextInput id="example" name="example" />
	</InputArea>
	<InputError>* This is an error...</InputError>
</div>
