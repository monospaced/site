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
          children:
            renderSetHeading({
              level: 1,
              responsive: true,
              size: "4xl",
              text: data.title,
            }) +
            renderSetImage({
              alt: "Portrait photo of Scott Boyle in front of a Monet water-lilies painting.",
              height: 256,
              src: "https://res.cloudinary.com/monospaced/image/upload/f_auto,q_auto,w_256/v1788949357/avatar-photo_kaq6qq.jpg",
              width: 256,
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
