import { getContext } from 'svelte';
import { readonly, type Readable, type Writable } from 'svelte/store';

export type TableContext = {
	borders: boolean;
	striped: boolean;
};

export const tableContextKey = Symbol();
export function getTableContext(): Readable<TableContext> {
	const context = getContext<Writable<TableContext> | undefined>(tableContextKey);
	if (!context) {
		throw new Error('Table context not avaiable, are you inside a <Table />?');
	}
	return readonly(context);
}
