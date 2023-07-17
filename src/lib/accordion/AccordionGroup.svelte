<script lang="ts" context="module">
	import type { createDisclosure } from 'svelte-headlessui';
	import { getContext, onDestroy } from 'svelte';

	const ctxKey = Symbol('Accordion Group');
	type DisclosureStore = ReturnType<typeof createDisclosure>;
	export type AccordionGroupContext = {
		disclosures: DisclosureStore[];
		onDisclosureExpanded(disclosure: DisclosureStore): void;
		registerDisclosure(disclosure: DisclosureStore): void;
	};

	export function getAccordionGroup(): AccordionGroupContext | undefined {
		return getContext(ctxKey);
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { actions, type UseActions } from '$lib/actions';

	let className = '';
	export { className as class };
	/**
	 * Only allow one accordion in the group to be open at a time
	 */
	export let exclusive = false;
	export let use: UseActions = [];

	setContext<AccordionGroupContext>(ctxKey, {
		disclosures: [],
		onDisclosureExpanded(disclosure) {
			if (exclusive) {
				for (const disc of this.disclosures) {
					if (disc === disclosure) {
						continue;
					}

					disc.close();
				}
			}
		},
		registerDisclosure(disclosure) {
			this.disclosures.push(disclosure);
			onDestroy(() => {
				const index = this.disclosures.findIndex((d) => d === disclosure);
				if (index != -1) {
					this.disclosures.splice(index, 1);
				}
			});
		},
	});
</script>

<div class={className} use:actions={use}>
	<slot />
</div>
