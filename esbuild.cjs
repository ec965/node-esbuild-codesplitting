const outdir = "out";
require("esbuild").build({
  entryPoints: ["./src/app.js"],//, "./src/lib.js"],
  outdir,
  bundle: true,
  format: "esm",
  splitting: true,
  platform: "node",
});
