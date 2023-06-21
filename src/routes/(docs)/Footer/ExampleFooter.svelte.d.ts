/** @typedef {typeof __propDef.props}  ExampleFooterProps */
/** @typedef {typeof __propDef.events}  ExampleFooterEvents */
/** @typedef {typeof __propDef.slots}  ExampleFooterSlots */
export default class ExampleFooter extends SvelteComponentTyped<
	{
		[x: string]: never;
	},
	{
		[evt: string]: CustomEvent<object>;
	}
> {}
export type ExampleFooterProps = typeof __propDef.props;
export type ExampleFooterEvents = typeof __propDef.events;
export type ExampleFooterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		[x: string]: never;
	};
	events: {
		[evt: string]: CustomEvent<object>;
	};
};
export {};
