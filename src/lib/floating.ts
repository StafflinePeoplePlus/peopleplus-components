type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;
export type FloatingPlacement = Side | AlignedPlacement;
export type FloatingStrategy = 'absolute' | 'fixed';
