import {
  convertHtmlToAbsoluteUrls,
  dateToRfc3339,
} from "@11ty/eleventy-plugin-rss";

import { toDate } from "./_lib/dates";
import type { SiteData } from "./_lib/types";

/*
 * Atom feed of the notes collection, full content per entry. The plugin's
 * stock feed template emits neither `<published>` nor a separate revised
 * date, so this template renders the XML itself with the plugin's helpers:
 * `<published>` is `date`, `<updated>` is `updated` when set (else `date`),
 * and the feed-level `<updated>` is the newest of those.
 */

interface FeedItem {
  /** Rendered Markdown body. */
  content: string;
  data: {
    summary: string;
    title: string;
    updated?: Date | string;
  };
  date: Date;
  url: string;
}

interface FeedData {
  collections: { notes: FeedItem[] };
  site: SiteData;
}

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const updatedDate = (item: FeedItem): Date =>
  item.data.updated ? toDate(item.data.updated) : item.date;

export default class Feed {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      eleventyImport: { collections: ["notes"] },
      permalink: "/feed.xml",
    };
  }

  async render(data: FeedData): Promise<string> {
    const { site } = data;
    const notes = data.collections.notes;

    const entries = await Promise.all(
      notes.map(async (item) => {
        const url = `${site.url}${item.url}`;
        const content = await convertHtmlToAbsoluteUrls(item.content, url);
        return `  <entry>
    <title>${escapeXml(item.data.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <published>${dateToRfc3339(item.date)}</published>
    <updated>${dateToRfc3339(updatedDate(item))}</updated>
    <summary>${escapeXml(item.data.summary)}</summary>
    <content type="html">${escapeXml(content)}</content>
  </entry>`;
      }),
    );

    const feedUpdated = notes.length
      ? new Date(Math.max(...notes.map((item) => updatedDate(item).getTime())))
      : new Date();

    return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en">
  <title>${escapeXml(site.title)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <link href="${site.url}/feed.xml" rel="self"/>
  <link href="${site.url}/"/>
  <updated>${dateToRfc3339(feedUpdated)}</updated>
  <id>${site.url}/</id>
  <author>
    <name>${escapeXml(site.author)}</name>
  </author>
${entries.join("\n")}
</feed>
`;
  }
}
