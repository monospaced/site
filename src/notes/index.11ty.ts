import {
  renderSetBox,
  renderSetContainer,
  renderSetHeading,
  renderSetStack,
  renderSetText,
} from "@monospaced/set-core";
import { processMarkdownInline } from "@monospaced/set-markdown";

import { isoDate } from "../_lib/dates";
import type { FooterData } from "../_lib/types";

export interface NoteItem {
  data: {
    summary: string;
    title: string;
  };
  date: Date;
  url: string;
}

export interface NotesIndexData {
  collections: { notes: NoteItem[] };
  footer: FooterData;
  title: string;
}

const renderRow = (item: NoteItem): string =>
  `<li>${renderSetStack({
    gap: "none",
    children:
      renderSetHeading({
        children: processMarkdownInline(`[${item.data.title}](${item.url})`),
        size: "md",
        responsive: true,
      }) +
      renderSetText({
        as: "p",
        children: item.data.summary,
        size: "md",
        responsive: true,
      }) +
      renderSetText({
        as: "p",
        children: isoDate(item.date),
        tone: "muted",
        size: "sm",
      }),
  })}</li>`;

export default class NotesIndex {
  data() {
    // The directory data file points Markdown items at the note layout;
    // the index overrides it, along with its filename-derived permalink.
    return {
      layout: "base.11ty.ts",
      permalink: "/notes/",
      title: "Notes",
    };
  }

  render(data: NotesIndexData): string {
    return renderSetContainer({
      maxInlineSize: "default",
      children: renderSetBox({
        paddingBlock: "2xl",
        paddingInline: "none",
        responsive: true,
        children: renderSetStack({
          responsive: true,
          children:
            renderSetHeading({
              level: 1,
              opticalAlign: true,
              responsive: true,
              size: "4xl",
              children: data.title,
            }) +
            renderSetStack({
              as: "ul",
              responsive: true,
              children: data.collections.notes.map(renderRow).join(""),
            }),
        }),
      }),
    });
  }
}
