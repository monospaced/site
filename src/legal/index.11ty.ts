import { readFileSync } from "node:fs";

import {
  renderSetBox,
  renderSetContainer,
  renderSetHeading,
  renderSetProse,
  renderSetStack,
} from "@monospaced/set-core";
import { processMarkdown } from "@monospaced/set-markdown";

const proseMarkdown = readFileSync(
  new URL("./content.md", import.meta.url),
  "utf8",
);

export default class Legal {
  data() {
    return {
      layout: "base.11ty.ts",
      permalink: "/legal/",
      title: "Legal",
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
              opticalAlign: true,
              responsive: true,
              size: "4xl",
              text: data.title,
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
