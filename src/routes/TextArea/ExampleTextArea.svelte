<script lang="ts">
	import { TextArea, InputLabel, InputError } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel forName="example" label="label" />
	<TextArea name="example" id="example" />
	<InputError>* This is an error...</InputError>
</div>
