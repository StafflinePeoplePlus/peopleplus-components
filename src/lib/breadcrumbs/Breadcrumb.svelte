<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };
	export let use: UseActions = [];
</script>

<li
	class={twMerge(
		"inline-flex items-center text-sm font-medium text-gray-700 after:pl-3 after:text-gray-400 after:content-['›'] last:text-gray-500 after:last:content-[''] hover:text-primary-600 last:hover:text-gray-500 dark:text-gray-400 dark:hover:text-primary-400 dark:last:hover:text-gray-400",
		className,
	)}
	use:actions={use}
>
	<slot />
</li>
