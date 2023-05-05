<script lang="ts">
	import { createAccordionGroup } from './state';

	export let id: string | undefined = undefined;
	/**
	 * Only allow one accordion in the group to be open at a time
	 */
	export let exclusive = false;

	const accordion = createAccordionGroup(id, { exclusive });
	$: $accordion.options.exclusive = exclusive;
</script>

<div>
	<slot />
</div>
