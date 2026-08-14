import type { SiteData } from "./_lib/types";

interface ManifestData {
  site: SiteData;
}

export default class Manifest {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "/manifest.webmanifest",
    };
  }

  render(data: ManifestData): string {
    return `${JSON.stringify(
      {
        name: data.site.title,
        short_name: data.site.title,
        description: data.site.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#f8fbfb",
        theme_color: "#017c7c",
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "/assets/favicons/maskable-icon-192.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "/assets/favicons/maskable-icon-192.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "/assets/favicons/maskable-icon-512.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "/assets/favicons/maskable-icon-512.png",
            type: "image/png",
          },
        ],
      },
      null,
      2,
    )}\n`;
  }
}
