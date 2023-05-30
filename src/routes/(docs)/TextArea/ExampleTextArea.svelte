<script lang="ts">
	import { TextArea, InputLabel, InputError, InputArea } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel for="example">Label</InputLabel>
	<InputArea>
		<TextArea name="example" id="example" rows={4} />
	</InputArea>
	<InputError>* This is an error...</InputError>
</div>
