<script lang="ts">
	import { TextInput, InputLabel, InputError } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel forName="example" label="label" />
	<TextInput id="example" name="example" />
	<InputError>* This is a error...</InputError>
</div>
