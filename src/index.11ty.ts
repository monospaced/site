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
        media: "(min-width: 90em)",
      },
      {
        aspectRatio: "21x9--2560",
        width: 2560,
        height: 1096,
        media: "(min-width: 80em)",
      },
      {
        aspectRatio: "21x9",
        width: 1280,
        height: 548,
        media: "(min-width: 64em)",
      },
      {
        aspectRatio: "16x9",
        width: 1280,
        height: 720,
        media: "(min-width: 48em)",
      },
      {
        aspectRatio: "3x2",
        width: 1280,
        height: 852,
        media: "(min-width: 40em)",
      },
      {
        aspectRatio: "3x2--640",
        width: 640,
        height: 426,
        media: "(min-width: 30em)",
      },
      {
        aspectRatio: "1x1--640",
        width: 640,
        height: 640,
        media: "(min-width: 20em)",
      },
    ];

    return (
      `<div style="position: relative;">${
        renderSetImage({
          adaptive: true,
          alt: "",
          fit: "fluid",
          leadSrc: `${image}--1x1--640--load-scan--{scheme}.webp`,
          priority: true,
          sources: aspects.map(({ aspectRatio, height, media }) => ({
            height,
            leadSrc: `${image}--${aspectRatio}--load-scan--{scheme}.webp`,
            media,
            srcSet: `${image}--${aspectRatio}--scan--{scheme}.webp`,
            stillSrc: `${image}--${aspectRatio}--adaptive.svg`,
          })),
          src: `${image}--1x1--640--scan--{scheme}.webp`,
          stillSrc: `${image}--1x1--640--adaptive.svg`,
        }) +
        `<div class="hero-logo"><div>${renderSetLogo({
          label: data.site.organization,
          size: "fill",
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
                  text: data.headline,
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
