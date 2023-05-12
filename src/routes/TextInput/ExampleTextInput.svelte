<script lang="ts">
	import { TextInput, InputLabel, InputError } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel for="example">Label</InputLabel>
	<TextInput id="example" name="example" />
	<InputError>* This is an error...</InputError>
</div>
