import { readFileSync } from "node:fs";

import browserslist from "@monospaced/set-config/browserslist";
import { processMarkdown } from "@monospaced/set-markdown";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { build } from "esbuild";

/** Marker a Markdown page can place where its own raw source should appear. */
const SELF_SOURCE_MARKER = "<!-- self-source -->";

const esbuildTarget = browserslistToEsbuild(browserslist);

export default function (eleventyConfig) {
  eleventyConfig.addExtension("11ty.ts", { key: "11ty.js" });

  // Prose pages read their sibling content.md via fs themselves; keep those
  // files out of the build so they don't also emit standalone pages.
  eleventyConfig.ignores.add("src/**/content.md");

  // Markdown renders through the same pipeline as the hand-fed prose pages,
  // so note bodies get identical sanitising, highlighting and heading ids.
  eleventyConfig.setLibrary("md", {
    render: (content) => processMarkdown(content),
  });

  // Replaces the self-source marker with the page's own raw Markdown (front
  // matter included) up to the marker, in a fenced block. Cutting at the
  // marker is what makes the embed possible at all: the block contains
  // everything above itself and stops exactly where it begins. The fence is
  // one backtick longer than any run in the source, so embedded fences can't
  // close it early.
  eleventyConfig.addPreprocessor("self-source", "md", (data, content) => {
    if (!content.includes(SELF_SOURCE_MARKER)) {
      return;
    }
    const raw = readFileSync(data.page.inputPath, "utf8");
    const source = raw.slice(0, raw.indexOf(SELF_SOURCE_MARKER)).trimEnd();
    const runs = [...source.matchAll(/`+/g)].map((match) => match[0].length);
    const fence = "`".repeat(Math.max(3, ...runs) + 1);
    return content.replace(
      SELF_SOURCE_MARKER,
      `${fence}md\n${source}\n${fence}`,
    );
  });

  // Sorted newest first. Deliberately not driven by the `tags` field, which
  // stays reserved for content themes.
  eleventyConfig.addCollection("notes", (collectionsApi) =>
    collectionsApi
      .getFilteredByGlob("src/notes/*.md")
      .sort((a, b) => b.date - a.date),
  );

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
    markdownTemplateEngine: false,
    templateFormats: ["11ty.ts", "md"],
  };
}
