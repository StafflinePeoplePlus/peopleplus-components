<script lang="ts">
	import { TextArea, InputLabel, InputError } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel for="example">Label</InputLabel>
	<TextArea name="example" id="example" rows={4} />
	<InputError>* This is an error...</InputError>
</div>
