<script lang="ts" context="module">
	import { getContext, setContext } from 'svelte';
	import { createMenu } from 'svelte-headlessui';

	type NavBarContext = { menu: ReturnType<typeof createMenu> };
	const ctxKey = Symbol('NavBar');
	export function getNavbarContext() {
		const ctx = getContext<NavBarContext | undefined>(ctxKey);
		if (!ctx) {
			throw new Error('Missing navbar context, is this element inside a NavBar?');
		}
		return ctx;
	}
</script>

<script lang="ts">
	let className = '';
	export { className as class };

	const menu = createMenu({ label: 'Navigation' });
	setContext<NavBarContext>(ctxKey, { menu });
</script>

<nav class="relative {className}">
	<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
		<slot />
	</div>
</nav>
