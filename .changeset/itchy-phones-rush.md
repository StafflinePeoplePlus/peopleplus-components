---
"@peopleplus/components": minor
---

Add support for using drag handles on sortable grid items.

The API is slightly different when using an explicit drag handle as previously an "item" acted as a
drag handle, drop target, and drag image all in one. These are now exposed as separate actions -
`handle`, `target`, and `image` respectively. The existing `item` action is still available and
useable, but does not support being used in conjunction with any of the new actions.

Unlike when using the existing `item` action, there are no styles applied for you when dragging.
Instead the `data-dragging` and `data-dragging-over` attributes are set. This allows you to apply
custom styling when an item is being dragged, or has an item dragged over it. Tailwind supports this
nicely with the `data-[]` modifier. E.g. to emulate the previous functionality
`data-[dragging-over]:opacity-50`

Full Example:

```svelte
<div
    class="transition-opacity data-[dragging-over]:opacity-50 data-[dragging]:opacity-0"
    use:sortable.target={item.id}
    use:sortable.image={item.id}
>
    <div
        use:sortable.handle={item.id}
    >
        <GripHorizontalIcon />
    </div>
    My Grid Item
</div>
```

As shown, the actions can be applied to the same element as needed.
