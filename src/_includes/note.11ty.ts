import {
  renderSetBox,
  renderSetContainer,
  renderSetDivider,
  renderSetGrid,
  renderSetGridItem,
  renderSetHeading,
  renderSetProse,
  renderSetStack,
  renderSetText,
} from "@monospaced/set-core";

import { isoDate } from "../_lib/dates";

export interface NoteData {
  /** Rendered Markdown body. */
  content: string;
  /** Published date. */
  date: Date | string;
  summary: string;
  title: string;
  /** Revised date; rendered only when present. */
  updated?: Date | string;
}

// The ISO date is both the display text and the machine-readable value,
// so no separate datetime attribute is needed.
const renderTime = (value: Date | string): string =>
  `<time>${isoDate(value)}</time>`;

export default class Note {
  data() {
    return {
      layout: "base.11ty.ts",
    };
  }

  render(data: NoteData): string {
    const dates =
      renderTime(data.date) +
      (data.updated ? ` | Updated: ${renderTime(data.updated)}` : "");

    return renderSetContainer({
      maxInlineSize: "default",
      children: renderSetBox({
        paddingBlock: "xl",
        paddingInline: "none",
        responsive: true,
        children: renderSetGrid({
          children: renderSetGridItem({
            colSpan: 8,
            colStart: 3,
            children: renderSetStack({
              gap: "md",
              responsive: true,
              children:
                `<header>${renderSetStack({
                  gap: "md",
                  children:
                    renderSetHeading({
                      level: 1,
                      responsive: true,
                      size: "2xl",
                      children: data.title,
                    }) +
                    renderSetText({
                      as: "p",
                      monospaced: true,
                      size: "sm",
                      children: dates,
                    }) +
                    renderSetText({
                      as: "p",
                      responsive: true,
                      size: "lg",
                      children: data.summary,
                    }),
                })}</header>` +
                renderSetDivider({
                  tone: "brand",
                }) +
                renderSetProse({
                  hangingPunctuation: "notebook",
                  responsive: true,
                  children: data.content,
                }),
            }),
          }),
        }),
      }),
    });
  }
}
