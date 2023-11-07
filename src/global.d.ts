declare namespace svelte.JSX {
	interface HTMLAttributes<> {
		onclick_outside?: (e: CustomEvent) => void;
	}
}
