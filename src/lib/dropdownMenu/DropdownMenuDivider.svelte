<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getDropdownMenuContext } from './menu';

	let className: string | undefined = undefined;
	export { className as class };

	const {
		elements: { separator },
	} = getDropdownMenuContext();
</script>

<hr
	class={twMerge('my-1.5 border-gray-200 dark:border-gray-600', className)}
	{...$separator}
	use:separator
/>
