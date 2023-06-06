<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import Switch from '$lib/forms/Switch.svelte';
	import CookiesTable from './CookiesTable.svelte';
	import type { CookieDescription } from './types';

	let className: string | undefined = undefined;
	export { className as class };
	export let title: string;
	export let body: string;
	export let name: string;
	export let required = false;
	export let checked = required;
	export let cookies: CookieDescription[] = [];
	export let expanded = false;
</script>

<section class={className}>
	<header class="mb-2 flex items-center justify-between gap-2">
		<Typography variant="sub-heading" as="label" for={name}>
			{title}
		</Typography>
		<Switch
			id={name}
			{name}
			bind:checked
			aria-hidden={required ? 'true' : 'false'}
			class={required ? 'hidden' : ''}
		/>
	</header>
	<Typography variant="body" class="max-w-prose">
		{body}
	</Typography>
	{#if cookies.length > 0}
		{#if expanded}
			<CookiesTable {cookies} class="mt-4 w-full" />
		{:else}
			<details class="mt-3">
				<summary
					class="inline-flex cursor-pointer list-none items-center gap-0.5 text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
				>
					View Cookies
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</summary>

				<CookiesTable {cookies} class="mt-2 w-full" />
			</details>
		{/if}
	{/if}
</section>
