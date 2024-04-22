---
"@peopleplus/components": minor
---

### Breaking Change
Remove size option from icon buttons in favour of the new dedicated size property.

#### Migration

Replace instances of `icon`, `icon="sm"` and `icon="md"` with `icon size="lg"`, `icon size="sm"` and
`icon` respectively.

Note that what was `md` is now the default, and what was the default is now `lg`.
