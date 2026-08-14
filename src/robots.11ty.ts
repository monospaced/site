import type { SiteData } from "./_lib/types";

interface RobotsData {
  site: SiteData;
}

export default class Robots {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "/robots.txt",
    };
  }

  render(data: RobotsData): string {
    // The v1 archive stays crawlable so its `X-Robots-Tag: noindex` header
    // (set in netlify.toml) can be seen and honoured.
    return `User-agent: *
Allow: /

Sitemap: ${data.site.url}/sitemap.xml
`;
  }
}
