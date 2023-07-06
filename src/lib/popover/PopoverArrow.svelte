<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	import type { PopoverInstance } from './action';

	export let popover: PopoverInstance;

	const arrowRotations = {
		top: 'rotate-0',
		bottom: 'rotate-180',
		left: '-rotate-90',
		right: 'rotate-90'
	};
	$: arrowStyle = $popover.arrow.x
		? `${$popover.staticSide}:-9px;left:${$popover.arrow.x}px;`
		: $popover.arrow.y
		? `${$popover.staticSide}:-14.5px;top:${$popover.arrow.y}px;`
		: '';
</script>

<div
	use:popover.arrow
	class={twJoin(
		'absolute h-[9px] w-[20px] bg-gray-200 drop-shadow-lg [clip-path:polygon(50%_0,_100%_100%,_0_100%)] dark:bg-gray-600',
		arrowRotations[$popover.staticSide]
	)}
	style={arrowStyle}
>
	<div
		class="ml-px mt-[1.5px] h-[8px] w-[18px] bg-white shadow-lg [clip-path:polygon(50%_0,_100%_100%,_0_100%)] dark:bg-gray-700"
	/>
</div>
