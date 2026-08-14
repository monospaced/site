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
    return (
      renderSetImage({
        alt: "",
        fit: "fluid",
        priority: true,
        sources: [
          {
            height: 548,
            media: "(min-width: 64em)",
            srcSet:
              "https://res.cloudinary.com/monospaced/image/upload/v1785952736/2026-05-17_11.06.23--cyan--21x9_aidxaq.png",
            width: 1280,
          },
          {
            height: 720,
            media: "(min-width: 48em)",
            srcSet:
              "https://res.cloudinary.com/monospaced/image/upload/v1785952732/2026-05-17_11.06.23--cyan--16x9_foj4kd.png",
            width: 1280,
          },
          {
            height: 854,
            media: "(min-width: 30em)",
            srcSet:
              "https://res.cloudinary.com/monospaced/image/upload/v1785952724/2026-05-17_11.06.23--cyan--3x2_fuailj.png",
            width: 1280,
          },
          {
            height: 1280,
            media: "(min-width: 24em)",
            srcSet:
              "https://res.cloudinary.com/monospaced/image/upload/v1785952720/2026-05-17_11.06.23--cyan--1x1_szdwrh.png",
            width: 1280,
          },
        ],
        src: "https://res.cloudinary.com/monospaced/image/upload/v1785952728/2026-05-17_11.06.23--cyan--4x5_sq37yt.png",
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
