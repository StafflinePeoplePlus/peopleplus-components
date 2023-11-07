export function clickOutside(node: HTMLElement, onClick: () => void) {
	const handleClick = (event: Event) => {
		const target = event.target as HTMLElement;
		if (node && !node.contains(target) && !event.defaultPrevented) {
			onClick();
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
}
