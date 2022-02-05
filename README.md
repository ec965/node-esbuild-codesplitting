# Node Esbuild Code Splitting

Recently, we've run into an issue where our node bundles are too large.
Pulling a single large file into memory creates issues with memory usage.

We can code split a node application using dynamic imports.

Esbuild only supports code splitting with ESM, but we can run ESM in node-16
by setting `"type": "module"` in our package.json.

