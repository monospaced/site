/**
 * Directory data for the Markdown notes. The slug comes from the filename
 * and the URL is flat — no date or type in the path — so items survive any
 * later addition of types or tags.
 */
export default {
  eleventyComputed: {
    // The one-sentence summary doubles as the meta/og description.
    description: (data) => data.summary,
  },
  layout: "note.11ty.ts",
  permalink: (data) => `/notes/${data.page.fileSlug}/`,
};
