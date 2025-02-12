<script lang="ts">
	import { run } from 'svelte/legacy';

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

	interface Props {
		class?: string | undefined;
		imageClass?: string | undefined;
		fallbackClass?: string | undefined;
		src?: string;
		name?: string | undefined;
		initials?: string | undefined;
		size?: keyof typeof sizes;
		[key: string]: any;
	}

	let {
		class: className = undefined,
		imageClass = undefined,
		fallbackClass = undefined,
		src = '',
		name = undefined,
		initials = undefined,
		size = 'md',
		...rest
	}: Props = $props();

	const {
		elements: { image, fallback },
		options: { src: avatarSrc },
	} = createAvatar({ src });

	run(() => {
		if (src !== $avatarSrc) {
			$avatarSrc = src;
		}
	});

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
	{...rest}
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
