import {
  renderSetBox,
  renderSetContainer,
  renderSetHeading,
  renderSetStack,
  renderSetText,
} from "@monospaced/set-core";

import type { NotFoundData } from "../_lib/types";

export default class NotFound {
  data() {
    return {
      centerMain: true,
      eleventyExcludeFromCollections: true,
      layout: "base.11ty.ts",
      permalink: "/404.html",
    };
  }

  render(data: NotFoundData): string {
    return renderSetContainer({
      children: renderSetBox({
        paddingInline: "none",
        responsive: true,
        children: renderSetStack({
          gap: "none",
          children: [
            renderSetHeading({
              align: "center",
              level: 1,
              responsive: true,
              size: "2xl",
              children: data.headline,
            }),
            renderSetText({
              align: "center",
              as: "p",
              children: data.message,
            }),
          ].join(""),
        }),
      }),
    });
  }
}
