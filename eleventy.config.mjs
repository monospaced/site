import browserslist from "@monospaced/set-config/browserslist";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { build } from "esbuild";

const esbuildTarget = browserslistToEsbuild(browserslist);

export default function (eleventyConfig) {
  eleventyConfig.addExtension("11ty.ts", { key: "11ty.js" });

  eleventyConfig.addPassthroughCopy({
    "node_modules/@monospaced/set-core/dist/core.css": "assets/set-core.css",
    "node_modules/@monospaced/set-assets/src/favicons": "assets/favicons",
    "node_modules/@monospaced/set-assets/src/fonts": "assets/fonts",
    "node_modules/@monospaced/set-assets/src/fonts.css": "assets/fonts.css",
    "src/v1": "v1",
  });

  eleventyConfig.on("eleventy.after", async () => {
    await build({
      entryPoints: {
        "assets/main": "src/scripts/index.js",
        styles: "src/styles.css",
      },
      outdir: "dist",
      bundle: true,
      minify: true,
      format: "esm",
      target: esbuildTarget,
    });
  });

  return {
    dir: {
      includes: "_includes",
      input: "src",
      output: "dist",
    },
    htmlTemplateEngine: false,
    templateFormats: ["11ty.ts"],
  };
}
