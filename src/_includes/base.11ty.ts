import {
  renderSetBox,
  renderSetContainer,
  renderSetDivider,
  renderSetInline,
  renderSetLightswitch,
  renderSetLink,
  renderSetLogo,
  renderSetNav,
  renderSetPage,
  renderSetRoot,
  renderSetStack,
  renderSetText,
  SET_LIGHTSWITCH_STORAGE_KEY,
} from "@monospaced/set-core";

import { brandIcons } from "../_lib/icons";
import type { FooterData, FooterLink, NavData, SiteData } from "../_lib/types";

// Stamped at build time; the footer copyright year refreshes on each build.
const CURRENT_YEAR = new Date().getFullYear();

// Social-share card image (OG/Twitter); requires an absolute URL.
const OG_IMAGE =
  "https://res.cloudinary.com/monospaced/image/upload/v1789314683/2026-05-17_11.06.23--cyan--og--mid.png";

export interface BasePageData {
  centerMain?: boolean;
  content?: string;
  /** Per-page meta description; falls back to the site description. */
  description?: string;
  footer: FooterData;
  nav: NavData;
  /** Eleventy-supplied current page data. */
  page?: { url?: string };
  site: SiteData;
  title?: string;
}

const buildNav = (nav: NavData, currentUrl?: string): string =>
  renderSetNav({
    collapsible: "belowTablet",
    contentId: "site-nav",
    expanderLabel: "Menu",
    expanderPosition: "end",
    items: nav.map((item) => ({
      current: item.href === currentUrl,
      href: item.href,
      label: item.label,
    })),
    label: "Primary",
    size: "sm",
  });

const buildHeader = (
  nav: NavData,
  site: SiteData,
  currentUrl?: string,
): string =>
  renderSetBox({
    paddingBlock: "sm",
    paddingInline: "none",
    children: renderSetContainer({
      maxInlineSize: "wide",
      children: renderSetInline({
        gap: "sm",
        justify: "between",
        children: [
          `<a href="/">${renderSetLogo({
            animated: currentUrl === "/",
            label: site.organization,
            size: "md",
            tone: "neutral",
          })}</a>`,
          `<div class="site-header-utilities">${[
            buildNav(nav, currentUrl),
            renderSetLightswitch({ size: "md" }),
          ].join("")}</div>`,
        ].join(""),
      }),
    }),
  });

const renderFooterLinks = (links: FooterLink[]): string =>
  links
    .map(
      ({ href, icon, label }) =>
        `<li>${renderSetLink({
          href,
          icon: brandIcons[icon],
          label,
          size: "sm",
          tone: "neutral",
        })}</li>`,
    )
    .join("");

const buildFooter = (footer: FooterData, site: SiteData): string =>
  renderSetContainer({
    maxInlineSize: "wide",
    children:
      renderSetDivider({ tone: "brand" }) +
      renderSetBox({
        paddingBlock: "sm",
        paddingInline: "none",
        children: renderSetInline({
          justify: "between",
          align: "end",
          children:
            renderSetStack({
              as: "ul",
              gap: "none",
              children: renderFooterLinks(footer.links),
            }) +
            renderSetInline({
              align: "end",
              children:
                renderSetStack({
                  gap: "none",
                  children:
                    renderSetLink({
                      href: footer.legal.link.href,
                      label: footer.legal.link.label,
                      size: "sm",
                      tone: "neutral",
                    }) +
                    renderSetText({
                      as: "p",
                      children: `© ${CURRENT_YEAR} ${site.organization}`,
                      size: "xs",
                      tone: "muted",
                    }),
                }) +
                `<a href="/" style="margin-bottom: var(--set-spacing-vertical-400);">${renderSetLogo(
                  {
                    label: site.organization,
                    size: "lg",
                    tone: "neutral",
                    variant: "graphic",
                  },
                )}</a>`,
            }),
        }),
      }),
  });

const renderBasePage = (data: BasePageData): string => {
  const { footer, nav, site } = data;

  const page = renderSetPage({
    centerMain: data.centerMain,
    children: data.content ?? "",
    footer: buildFooter(footer, site),
    header: buildHeader(nav, site, data.page?.url),
    headerBorder: "scroll",
    headerSize: "sm",
    stickyHeader: "always",
  });

  /* Stamps a stored lightswitch override onto the root before its content
     parses, so an overridden theme paints correctly on first load. Must be
     the root's first child: earlier and the root doesn't exist yet, later
     and content above it may already have painted in the wrong theme. */
  const themeBootstrap = `<script>try{var t=localStorage.getItem(${JSON.stringify(
    SET_LIGHTSWITCH_STORAGE_KEY,
  )});if(t==="light"||t==="dark")document.currentScript.closest(".set").setAttribute("data-set-theme",t)}catch(e){}</script>`;

  const root = renderSetRoot({
    appOverscrollBehavior: "none",
    appRoot: true,
    children: themeBootstrap + page,
  });

  const title = data.title ? `${data.title} | ${site.title}` : site.title;
  const description = data.description ?? site.description;
  const canonical = `${site.url}${data.page?.url ?? "/"}`;
  const attr = (value: string): string =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#017c7c">
<title>${attr(title)}</title>
<meta name="description" content="${attr(description)}">
<link rel="canonical" href="${attr(canonical)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${attr(site.title)}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(description)}">
<meta property="og:url" content="${attr(canonical)}">
<meta property="og:image" content="${attr(OG_IMAGE)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(title)}">
<meta name="twitter:description" content="${attr(description)}">
<meta name="twitter:image" content="${attr(OG_IMAGE)}">
<link href="/assets/favicons/apple-touch-icon.png" rel="apple-touch-icon">
<link href="/assets/favicons/favicon.ico" rel="icon" sizes="32x32">
<link href="/assets/favicons/favicon.svg" rel="icon" type="image/svg+xml">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="preload" href="/assets/fonts/Berkeley Mono Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts.css">
<link rel="stylesheet" href="/assets/set-core.css">
<link rel="stylesheet" href="/styles.css">
</head>
<body>${root}<script type="module" src="/assets/main.js"></script></body>
</html>`;
};

export default class Base {
  render(data: BasePageData): string {
    return renderBasePage(data);
  }
}
