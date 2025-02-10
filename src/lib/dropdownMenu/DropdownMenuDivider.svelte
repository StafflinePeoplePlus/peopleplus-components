<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getDropdownMenuContext } from './menu';

	interface Props {
		class?: string | undefined;
		[key: string]: any
	}

	let { class: className = undefined, ...rest }: Props = $props();
	

	const {
		elements: { separator },
	} = getDropdownMenuContext();
</script>

<hr
	class={twMerge('my-1.5 border-gray-200 dark:border-gray-600', className)}
	{...$separator}
	use:separator
	{...rest}
/>
