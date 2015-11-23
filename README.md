# Aoe_SCSS_helpers
## Description
Some SCSS helpers used in multiple projects.

## Adding a helper
Add your file in the root directory. Before pushing please run ```grunt``` to lint the files.

## Additional information
### _namespaced-normalize.scss
Provides a namespaced version of https://github.com/necolas/normalize.css/ ready to be included into your scss codebase. Once included, just set the namespace by overriding `$normalize-css-namespace` with a class or id selector. Example:

`$normalize-css-namespace: '#myWidget'` or `$normalize-css-namespace: '.myStuff'`.


