---
'pp-svelte-components': patch
---

- Introduced `overlayClass` prop to allow custom styling on the negative space of the Drawer component.
- The default 'Close Drawer' button has been removed.
- Clicking outside the drawer area now dismisses the drawer.

The changes aim to expand customisation capabilities allowing it to fit a wider range of use cases.

#### How to Update Your Code:

- If you rely on the 'Close Drawer' button, you will now need to add it manually to the slot.
- To prevent the drawer from being dismissible by clicking outside, add `disableClickOutside` to the component props.
