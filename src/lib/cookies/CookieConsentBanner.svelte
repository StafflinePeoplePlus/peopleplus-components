<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Typography from '$lib/Typography.svelte';
	import { createEventDispatcher } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import type { CookieCategory } from './types';
	import CookieConsentCategory from './CookieConsentCategory.svelte';
	import { twMerge } from 'tailwind-merge';
	import { defaultCookieStrings, type CookieStrings } from './i18n';

	const dispatch = createEventDispatcher<{
		save: Record<string, boolean | undefined>;
		accept: void;
		reject: void;
	}>();

	interface Props {
		class?: string | undefined;
		categories: CookieCategory[];
		consent?: Record<string, boolean | undefined>;
		acceptAction?: string | undefined;
		rejectAction?: string | undefined;

		save?: (consent: Record<string, boolean | undefined>) => void;
		accept?: () => void;
		reject?: () => void;

		strings?: CookieStrings;
		children?: import('svelte').Snippet;
	}

	let {
		class: className = undefined,
		categories,
		consent = $bindable({}),
		acceptAction = undefined,
		rejectAction = undefined,
		strings = defaultCookieStrings,
		children,
		save,
		accept,
		reject,
	}: Props = $props();

	let expanded = $state(false);
</script>

<section
	class={twMerge(
		'fixed inset-x-0 bottom-0 max-h-[calc(100%-2rem)] overflow-auto border-t border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800',
		className,
	)}
	transition:fade
>
	<div class="flex flex-col gap-4 md:flex-row md:items-center">
		<div class="grow">
			<Typography variant="sub-heading" as="h2">{strings.cookieConsent}</Typography>
			<Typography variant="body" class="mt-3 max-w-prose">
				{strings.cookiesDescription}
			</Typography>
		</div>
		<div
			class={twMerge('grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-2', expanded && 'hidden')}
		>
			<Button
				variant="secondary"
				type={acceptAction ? 'submit' : 'button'}
				formaction={acceptAction}
				class="md:w-56"
				onclick={() => {
					dispatch('accept');
					accept?.();
				}}
			>
				<span class="md:hidden">{strings.acceptAll}</span>
				<span class="hidden md:inline">{strings.acceptAllCookies}</span>
			</Button>
			<Button
				class="md:w-56"
				type="button"
				onclick={() => (expanded = !expanded)}
				aria-expanded={expanded ? 'true' : 'false'}
				aria-controls="consent-content"
			>
				<span>
					{#if expanded}
						{strings.cancel}
					{:else}
						<span class="md:hidden">{strings.customise}</span>
						<span class="hidden md:inline">{strings.customiseCookies}</span>
					{/if}
				</span>
			</Button>
		</div>
	</div>
	{#if expanded}
		<div transition:slide class="max-w-prose" id="consent-content">
			{@render children?.()}

			<div class="divide-y dark:divide-gray-700">
				<div class="mb-8">
					<div class="mt-4 grid grid-cols-2 gap-4">
						<Button
							variant="secondary"
							type={acceptAction ? 'submit' : 'button'}
							formaction={acceptAction}
							onclick={() => {
								dispatch('accept');
								accept?.();
							}}
						>
							<span class="md:hidden">{strings.acceptAll}</span>
							<span class="hidden md:inline">{strings.acceptAllCookies}</span>
						</Button>
						<Button
							variant="secondary"
							type={rejectAction ? 'submit' : 'button'}
							formaction={rejectAction}
							onclick={() => {
								dispatch('reject');
								reject?.();
							}}
						>
							<span class="md:hidden">{strings.rejectAll}</span>
							<span class="hidden md:inline">{strings.rejectAllCookies}</span>
						</Button>
					</div>
				</div>

				{#each categories as category}
					<CookieConsentCategory
						class="py-6 last:pb-0"
						{strings}
						name={category.name}
						title={category.title}
						body={category.body}
						required={category.required}
						cookies={category.cookies}
						bind:checked={consent[category.name]}
					/>
				{/each}

				<div class="grid grid-cols-2 gap-4 pt-8 md:block">
					<Button
						variant="primary"
						type="submit"
						onclick={() => {
							expanded = false;
							dispatch('save', consent);
							save?.(consent);
						}}
					>
						{strings.saveAndClose}
					</Button>
					<Button
						class="md:hidden"
						variant="secondary"
						type="button"
						onclick={() => {
							expanded = false;
						}}
					>
						{strings.cancel}
					</Button>
				</div>
			</div>
		</div>
	{/if}
</section>
