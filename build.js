const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["bin/hsd-cli", "bin/hsw-cli"],
  bundle: true,
  outdir: "bundle",
  platform: "node",
  format: "cjs",
  banner: {
    js: `
        import { createRequire } from "https://deno.land/std@0.168.0/node/module.ts";
        import * as path from "https://deno.land/std@0.57.0/path/mod.ts";
        const require = createRequire(import.meta.url);
        const __filename = path.fromFileUrl(import.meta.url);
        const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
`,
  },
});
