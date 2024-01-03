# @peopleplus/components

## 0.0.36

### Patch Changes

- 618202b: add ability to change/translate the cookie consent text
- c6d0a4a: Add a tooltip as an interactive overlay that presents details about a component when it is on keyboard focus or hovered, and the position to be configurable.
- f4d8590: Fix stepper border radius for consistency

## 0.0.35

### Patch Changes

- 900d619: spread restprops onto the dropdown menu components

## 0.0.34

### Patch Changes

- f71aec5: Added a Gauge component to use data as a measure of speed or progress towards a goal.
- 63e2b87: The SidebarItem active colour is now set to primary colour.
- 63e2b87: Add dropdown menu component

## 0.0.33

### Patch Changes

- 62e7035: Added 'Collapsible', an interactive component which expands/collapses a panel.

## 0.0.32

### Patch Changes

- 152bfec: - Introduced `overlayClass` prop to allow custom styling on the negative space of the Drawer component.

  - The default 'Close Drawer' button has been removed.
  - Clicking outside the drawer area now dismisses the drawer.

  The changes aim to expand customisation capabilities allowing it to fit a wider range of use cases.

  #### How to Update Your Code:

  - If you rely on the 'Close Drawer' button, you will now need to add it manually to the slot.
  - To prevent the drawer from being dismissible by clicking outside, add `disableClickOutside` to the component props.

## 0.0.31

### Patch Changes

- 4690a2c: Set up changesets for changelog and release management
