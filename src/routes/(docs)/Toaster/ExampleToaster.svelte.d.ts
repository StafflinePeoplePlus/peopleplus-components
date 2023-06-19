/** @typedef {typeof __propDef.props}  ExampleToasterProps */
/** @typedef {typeof __propDef.events}  ExampleToasterEvents */
/** @typedef {typeof __propDef.slots}  ExampleToasterSlots */
export default class ExampleToaster extends SvelteComponentTyped<
	{
		[x: string]: never;
	},
	{
		[evt: string]: CustomEvent<null>;
	}
> {}
export type ExampleToasterProps = typeof __propDef.props;
export type ExampleToasterEvents = typeof __propDef.events;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		[x: string]: never;
	};
	events: {
		[evt: string]: CustomEvent<null>;
	};
};
export {};
