/** @typedef {typeof __propDef.props}  DrawerProps */
/** @typedef {typeof __propDef.events}  DrawerEvents */
/** @typedef {typeof __propDef.slots}  DrawerSlots */
export default class Drawer extends SvelteComponentTyped<
	{
		[x: string]: never;
	},
	{
		[evt: string]: CustomEvent<any>;
	},
	{}
> {}
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		[x: string]: never;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export {};
