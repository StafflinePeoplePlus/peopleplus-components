<script>
	import { twMerge } from "tailwind-merge";
	let className = "";
	export { className as class };

	export let title = '';
	let isHovered = false;
	let x;
	let y;

	function mouseOver(event) {
		isHovered = true;
		x = event.pageX;
		y = event.pageY;
	}

	function mouseMove(event) {
		x = event.pageX;
		y = event.pageY;
	}

	function mouseLeave() {
		isHovered = false;
	}
</script>

<div
		on:mouseover={mouseOver}
		on:mouseleave={mouseLeave}
		on:mousemove={mouseMove}
		class="absolute"
>
	{#if isHovered}
		<div style="top: {y}px; left: {x}px;"
			 {...$$restProps}
			 class={twMerge('tooltip shadow-md bg-black/70 rounded-md p-2 fixed text-white', className)}
		>{title}</div>
	{/if}
	<slot/>
</div>

