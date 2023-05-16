<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
</script>

<ul
	class={twMerge(
		'flex flex-col font-medium md:mt-0 md:flex-row md:items-center md:gap-x-4',
		className
	)}
>
	<slot />
</ul>
