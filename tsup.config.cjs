import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: ["cjs", "esm", "iife"],
  dts: true,
  legacyOutput: true,
  minify: true,
  metafile: true,
  target: "ES2018",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
