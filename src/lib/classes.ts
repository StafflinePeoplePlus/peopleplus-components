type MaybeClass = string | null | undefined | false;
export function classes(...classes: MaybeClass[]): string {
	return classes.filter(Boolean).join(' ');
}
