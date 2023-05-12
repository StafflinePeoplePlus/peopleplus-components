<script lang="ts">
	import { TextInput, InputLabel, InputError } from '$lib';
</script>

<div class="space-y-3">
	<InputLabel class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="example"
		>Label</InputLabel
	>
	<TextInput id="example" name="example" />
	<InputError class="font-semibold text-red-700 dark:text-red-400">* This is an error...</InputError
	>
</div>
