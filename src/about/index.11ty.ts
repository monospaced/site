import { readFileSync } from "node:fs";

import {
  renderSetBox,
  renderSetContainer,
  renderSetHeading,
  renderSetImage,
  renderSetProse,
  renderSetStack,
} from "@monospaced/set-core";
import { processMarkdown } from "@monospaced/set-markdown";

const proseMarkdown = readFileSync(
  new URL("./content.md", import.meta.url),
  "utf8",
);

export default class About {
  data() {
    return {
      layout: "base.11ty.ts",
      permalink: "/about/",
      title: "About",
    };
  }

  render(data: { title: string }): string {
    return renderSetContainer({
      maxInlineSize: "default",
      children: renderSetBox({
        paddingBlock: "2xl",
        paddingInline: "none",
        responsive: true,
        children: renderSetStack({
          responsive: true,
          children:
            renderSetStack({
              gap: "sm",
              responsive: true,
              children:
                renderSetHeading({
                  level: 1,
                  responsive: true,
                  size: "4xl",
                  children: data.title,
                }) +
                renderSetImage({
                  alt: "Portrait photo of Scott Boyle.",
                  height: 256,
                  src: "https://res.cloudinary.com/monospaced/image/upload/f_auto,q_auto,w_512/v1788956814/avatar-photo_hnu1cu.jpg",
                  width: 256,
                }),
            }) +
            renderSetProse({
              responsive: true,
              children: processMarkdown(proseMarkdown),
            }),
        }),
      }),
    });
  }
}
