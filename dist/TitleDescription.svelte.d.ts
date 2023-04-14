/** @typedef {typeof __propDef.props}  TitleDescriptionProps */
/** @typedef {typeof __propDef.events}  TitleDescriptionEvents */
/** @typedef {typeof __propDef.slots}  TitleDescriptionSlots */
export default class TitleDescription extends SvelteComponentTyped<{
    title?: string | undefined;
    description?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TitleDescriptionProps = typeof __propDef.props;
export type TitleDescriptionEvents = typeof __propDef.events;
export type TitleDescriptionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        description?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
