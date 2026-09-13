import {
  renderSetBox,
  renderSetContainer,
  renderSetGrid,
  renderSetGridItem,
  renderSetHeading,
  renderSetImage,
  renderSetText,
} from "@monospaced/set-core";

import type { HomeData } from "./_lib/types";

export default class Index {
  data() {
    return {
      layout: "base.11ty.ts",
      permalink: "/",
      title: "",
    };
  }

  render(data: HomeData): string {
    const image =
      "https://res.cloudinary.com/monospaced/image/upload/2026-05-17_11.06.23--cyan";
    const aspects = [
      { aspectRatio: "21x9", height: 548, media: "(min-width: 64em)" },
      { aspectRatio: "16x9", height: 720, media: "(min-width: 48em)" },
      { aspectRatio: "3x2", height: 853, media: "(min-width: 30em)" },
      { aspectRatio: "1x1", height: 1280, media: "(min-width: 20em)" },
    ];

    return (
      renderSetImage({
        adaptive: true,
        alt: "",
        animated: true,
        fit: "fluid",
        leadSrc: `${image}--load-scan--1x1--{scheme}.webp`,
        priority: true,
        sources: aspects.map(({ aspectRatio, height, media }) => ({
          height,
          leadSrc: `${image}--load-scan--${aspectRatio}--{scheme}.webp`,
          media,
          srcSet: `${image}--scan--${aspectRatio}--{scheme}.webp`,
          still: `${image}--${aspectRatio}--adaptive.svg`,
          width: 1280,
        })),
        src: `${image}--scan--1x1--{scheme}.webp`,
        still: `${image}--1x1--adaptive.svg`,
      }) +
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
