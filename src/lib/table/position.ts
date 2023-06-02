export type VerticalPosition = 'top' | 'bottom';
export type HorizontalPosition = 'left' | 'right';
export type VisualPosition =
	| `${VerticalPosition}-${HorizontalPosition}`
	| VerticalPosition
	| HorizontalPosition
	| 'none';

export function isPosition(
	configured: VisualPosition,
	target: `${VerticalPosition}-${HorizontalPosition}`
): boolean {
	return (
		configured === target ||
		(configured === 'top' && target.startsWith('top')) ||
		(configured === 'bottom' && target.startsWith('bottom')) ||
		(configured === 'left' && target.endsWith('left')) ||
		(configured === 'right' && target.endsWith('right'))
	);
}
