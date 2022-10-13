# eslint-config-atama

ESLint config for Atama Projects.

### Installation

```
npm i -D @atamaco/eslint-config-atama
```

Add an `.eslintrc` file to your project (the root generally). In it, add

```js
{
  "extends": [
    "@atamaco/eslint-config-atama"
  ]
}
```

If you want to use it in a Next.js project use `@atamaco/eslint-config-atama/next` instead.

Also create a `.prettierrc.js` and add the following:

```js
module.exports = {
  ...require('@atamaco/eslint-config-atama/.prettierrc.js'),
}
```

_fin._

## ESLint configurations

There are two configurations in this project:

1. `index.js` has the base linting rules for TypeScript/Node projects
2. `next.js` has the base linting rules for Next.js TypeScript projects

## Other configurations

### Commitlint
**WARNING: Semi-experimental** (we got this to work through trial and error but didn't see the exact method documented in the official docs)

In your project, setup / install commitlint - exact steps are slightly out of scope of this doc, but this is probably a good starting point:

```
npm install --save-dev @commitlint/{config-conventional,cli}
echo "module.exports = {extends: ['@atamaco/eslint-config-atama/commitlint.config.js']}" > commitlint.config.js
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

They key here in case you missed it is the commitlint.config.js file references the commitlint config in the atamaco eslint config package:

```
module.exports = {extends: ['@atamaco/eslint-config-atama/commitlint.config.js']};
```

You should be able ot test this via

`echo 'foo: bar' | npx commitlint` (should fail)
`echo 'fix: bar' | npx commitlint` (should pass without errors or output)

### Stylelint

Stylelint can be added by adding the following to your `.stylelintrc`:

```js
{
  "extends": ["eslint-config-typescript-shareable/.stylelintrc"]
}
```

### Editorconfig

Unfortunately editorconfig can't be extended, so if you want editorconfig setup you'll have to copy the configuration over manually.


## Contributing

Changes to this project can be made freely, but it's useful to know packages are published:

1. When you commit a change, husky _should_ enforce [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
2. When you land a PR to `main`, a Github Action is kicked off that
    1. will bump the version of the package based on the conventional commit message (e.g. `feat: ...` == minor bump, `fix: ...` == patch, etc)
    2. will publish a version of the package to NPM

## Useful links

### eslint docs
https://eslint.org/docs/developer-guide/shareable-configs

### Good example repo
https://github.com/AxisCommunications/eslint-config-typescript-shareable
