export type ToastKind = 'success' | 'error' | 'alert';
export type ToastMessage = {
	id: number;
	kind: ToastKind;
	content: {
		message: string;
	};
	duration?: number | null;
};
