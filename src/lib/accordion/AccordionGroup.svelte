<script lang="ts" module>
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

	interface Props {
		class?: string;
		/**
		 * Only allow one accordion in the group to be open at a time
		 */
		exclusive?: boolean;
		use?: UseActions;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', exclusive = false, use = [], children }: Props = $props();

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
	{@render children?.()}
</div>
