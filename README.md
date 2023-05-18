# PeoplePlus Svelte Components

A set of opinionated Svelte components with a focus on accesibility, no JavaScript fallback, and
SvelteKit/SSR support. See the [showcase/docs here](https://peopleplus-components.pages.dev/).

## Test coverage

| Statements                                                                                                                                                         | Branches                                                                                                                                                       | Functions                                                                                                                                                        | Lines                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/endpoint?style=flat&url=https://gist.githubusercontent.com/jamesbirtles/30db617e41d5bf83af5927c7c071bbeb/raw/statements.json) | ![Branches](https://img.shields.io/endpoint?style=flat&url=https://gist.githubusercontent.com/jamesbirtles/30db617e41d5bf83af5927c7c071bbeb/raw/branches.json) | ![Functions](https://img.shields.io/endpoint?style=flat&url=https://gist.githubusercontent.com/jamesbirtles/30db617e41d5bf83af5927c7c071bbeb/raw/functions.json) | ![Lines](https://img.shields.io/endpoint?style=flat&url=https://gist.githubusercontent.com/jamesbirtles/30db617e41d5bf83af5927c7c071bbeb/raw/lines.json) |

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of the library, everything inside `src/routes` is used to
showcase and document that library.

## Building

To build the library:

```bash
npm run package
```

To create a production version of the showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Contributing

See our [Contribution Guidelines](./CONTRIBUTING.md).

## Publishing

Publishes to npm are done automatically on pushes to main where the package.json version has
changed. The docs/showcase are updated on pushed to main.
