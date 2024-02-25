Thanks for showing interest to contribute to Bespoke-table 🤘 !

When it comes to open source, there are different ways you can contribute, all of which are valuable. Here's a few
guidelines that should help you as you prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Bespoke-table:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/s-roueche/bespoke-table))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/bespoke-table.git
cd bespoke-table
```

3. Setup all the dependencies and packages by running `yarn install`. This
   command will install dependencies.

> If you run into any issues during this step,
> create an issue here: https://github.com/s-roueche/bespoke-table/issues

## Development

### Tooling

- [Yarn](https://yarnpkg.com/) to manage packages and dependencies
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Testing Library](https://testing-library.com/) for testing components and
  hooks
- [Jest](https://jestjs.io/) as the test runner
- [Rollup](https://rollupjs.org/) for bundling
- Support for [TypeScript](https://www.typescriptlang.org/)
- Optimizing bundle size: [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser) A Rollup plugin
  to generate a minified bundle with terser.
- Automatically externalize peerDependencies in a rollup bundle, thanks
  to [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external)
- Eslint
- Deploy Storybook to GitHub Pages

### Commands

- `yarn build` : builds the library to `dist`
- `yarn dev`  : builds the library, then keeps rebuilding it whenever the source files change.
- `yarn test` : tests the library and show the coverage.
- `yarn lint` : runs eslint.
- `yarn storybook` : runs the host Storybook application locally for quick and easy testing
- `yarn build-storybook` : builds a static HTML/JS bundle that can easily be hosted on a remote server, so all members
  of your team can try your components.
- `yarn deploy-storybook` : build & deploy the storybook to GitHub Pages

### Storybook

Storybook gives you an easy way to see and use your components while working on them in your library project,
without having to build an unnecessary testing page just to display them.

```bash
yarn storybook # runs the host Storybook application locally for quick and easy testing
```

Now, anytime you make a change to your library or the stories, the storybook will live-reload your local dev server so
you can iterate on your component in real-time.

### Rollup watch and build

For Local development run rollup to watch your src/ module and automatically recompile it into dist/ whenever you
make changes.

```bash
yarn dev # runs rollup with watch flag
```

## Deployment

### Deploy Storybook to GitHub Pages:

```bash
yarn build-storybook 
yarn deploy-storybook
```

## Think you found a bug ?

Please create an issue and provide a clear path to reproduction with a code example. The best way to show a bug is by
sending a CodeSandbox link.

## Proposing new or changed API?

Please provide thoughtful comments and some sample code.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this
repository.

When you create a commit we kindly ask you to follow the convention
`category: message` in your commit message while using one of the following categories:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above categories

### Steps to PR

1. Fork of the bespoke-table repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention `[type/scope]`. For example `fix/cell`
   or `docs/header`. `type` can be either `docs`, `fix`, `feat`, `build`, or any other conventional commit type. `scope`
   is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/s-roueche/bespoke-table/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `yarn build` and `yarn test` to make sure everything works as expected.

### Tests

All commits that fix bugs or add features need a test.

## License

By contributing your code to the bespoke-table GitHub repository, you agree to
license your contribution under the [MIT](LICENSE.txt) license.