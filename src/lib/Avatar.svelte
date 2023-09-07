<script lang="ts">
	import { createAvatar } from '@melt-ui/svelte';
	import { twMerge } from 'tailwind-merge';

	const sizes = {
		xs: { container: 'h-6 w-6', fallback: 'text-xs' },
		sm: { container: 'h-8 w-8', fallback: 'text-base' },
		md: { container: 'h-12 w-12', fallback: 'text-2xl' },
		lg: { container: 'h-16 w-16', fallback: 'text-3xl' },
		xl: { container: 'h-20 w-20', fallback: 'text-[2.5rem]' },
		'2xl': { container: 'h-28 w-28', fallback: 'text-6xl' },
		'3xl': { container: 'h-40 w-40', fallback: 'text-[5rem]' },
	};

	let className: string | undefined = undefined;
	export { className as class };
	export let imageClass: string | undefined = undefined;
	export let fallbackClass: string | undefined = undefined;
	export let src: string = '';
	export let name: string | undefined = undefined;
	export let initials: string | undefined = undefined;
	export let size: keyof typeof sizes = 'md';

	const {
		elements: { image, fallback },
		options: { src: avatarSrc },
	} = createAvatar({ src });

	$: if (src !== $avatarSrc) {
		$avatarSrc = src;
	}

	function initialsFromName(text: string) {
		let names: string[];
		if (text.includes('@')) {
			// Probably an email address, extract the part before the @
			const [username] = text.split('@');
			names = username.split(/[._-]/);
		} else {
			names = text.split(/\s+/);
		}

		if (names.length === 1) {
			return text.slice(0, 2);
		}

		return names[0].charAt(0) + names[names.length - 1].charAt(0);
	}
</script>

<div
	class={twMerge(
		'flex items-center justify-center rounded-full bg-primary-200',
		sizes[size].container,
		className,
	)}
>
	<img
		{...$image}
		use:image
		alt="{name}'s Avatar"
		class={twMerge('h-full w-full rounded-[inherit]', imageClass)}
	/>
	<span
		{...$fallback}
		use:fallback
		class={twMerge('font-medium uppercase text-primary-900', sizes[size].fallback, fallbackClass)}
	>
		{initials ?? (name ? initialsFromName(name) : '?')}
	</span>
</div>
