export default function (eleventyConfig) {
  eleventyConfig.addExtension("11ty.ts", { key: "11ty.js" });

  eleventyConfig.addPassthroughCopy({
    "node_modules/@monospaced/set-core/dist/core.css": "assets/set-core.css",
    "node_modules/@monospaced/set-core/dist/index.js": "assets/set-core.js",
    "node_modules/@monospaced/set-assets/src/favicons": "assets/favicons",
    "node_modules/@monospaced/set-assets/src/fonts": "assets/fonts",
    "node_modules/@monospaced/set-assets/src/fonts.css": "assets/fonts.css",
    "src/styles.css": "styles.css",
    "src/v1": "v1",
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
