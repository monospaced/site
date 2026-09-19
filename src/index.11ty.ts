import {
  renderSetBox,
  renderSetContainer,
  renderSetGrid,
  renderSetGridItem,
  renderSetHeading,
  renderSetImage,
  renderSetLogo,
  renderSetText,
} from "@monospaced/set-core";

import type { HomeData, SiteData } from "./_lib/types";

export default class Index {
  data() {
    return {
      layout: "base.11ty.ts",
      permalink: "/",
      title: "",
    };
  }

  render(data: HomeData & { site: SiteData }): string {
    const image =
      "https://res.cloudinary.com/monospaced/image/upload/2026-05-17_11.06.23--cyan";
    const aspects = [
      {
        aspectRatio: "3x1--2560",
        width: 2560,
        height: 854,
        media: "(min-width: 128em)", // 2048
      }, // 1.6+
      {
        aspectRatio: "3x1--1920",
        width: 1920,
        height: 640,
        media: "(min-width: 90em)", // 1440
      }, // 1.5–2.13
      {
        aspectRatio: "21x9",
        width: 1280,
        height: 548,
        media: "(min-width: 64em)", // 1024
      }, // 1.6–2.25
      {
        aspectRatio: "16x9--960",
        width: 960,
        height: 540,
        media: "(min-width: 48em)", // 768
      }, // 1.6–2.13
      {
        aspectRatio: "3x2--640",
        width: 640,
        height: 426,
        media: "(min-width: 30em)", // 480
      }, // 1.5–2.4
      {
        aspectRatio: "1x1--480",
        width: 480,
        height: 480,
        media: "(min-width: 20em)", // 320
      }, // 1.33–2.0
    ];

    return (
      `<div style="position: relative;">${
        renderSetImage({
          alt: "",
          fit: "fluid",
          leadSrc: `${image}--1x1--480--load-scan--mid.webp`,
          priority: true,
          sources: aspects.map(({ aspectRatio, height, media }) => ({
            height,
            leadSrc: `${image}--${aspectRatio}--load-scan--mid.webp`,
            media,
            srcSet: `${image}--${aspectRatio}--scan--mid.webp`,
            stillSrc: `${image}--${aspectRatio}--mid.png`,
          })),
          src: `${image}--1x1--480--scan--mid.webp`,
          stillSrc: `${image}--1x1--480--mid.png`,
        }) +
        `<div class="hero-logo"><div>${renderSetLogo({
          label: data.site.organization,
          size: "fill",
          tone: "neutral",
          variant: "secondary",
        })}</div></div>`
      }</div>` +
      renderSetBox({
        paddingBlock: "lg",
        paddingInline: "none",
        children: renderSetContainer({
          maxInlineSize: "wide",
          children: renderSetGrid({
            children: [
              renderSetGridItem({
                colSpan: 5,
                colStart: 2,
                children: renderSetHeading({
                  level: 1,
                  responsive: true,
                  size: "md",
                  children: data.headline,
                }),
              }),
              renderSetGridItem({
                colSpan: 5,
                colStart: 7,
                children: `<div style="margin-block-start: 0.09375rem">${renderSetText(
                  {
                    as: "p",
                    children: data.subhead,
                    linkVisited: false,
                    responsive: true,
                    size: "md",
                  },
                )}</div>`,
              }),
            ].join(""),
          }),
        }),
      })
    );
  }
}
