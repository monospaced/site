---
title: Kitchen sink
summary: This is the first article, and it is about itself.
date: 2026-09-17
updated: 2026-09-18
---

This article contains all the [Markdown](https://www.markdownguide.org/basic-syntax/) elements and structures used by this site, with the copy to demonstrate them.

What you're reading isn't Markdown though, it's the HTML Markdown has produced, styled by the site's CSS (if you're reading on the site).

These are paragraphs. Where supported, they never end in a widow.

Links are coloured rather than underlined, until you hover. Visited links change colour. Here's one to [an external site](https://scottboyle.co), one to [a local page](/), and one to [a section heading in this article](#an-h2-heading). Autolink literals like www.monospaced.com become links without any markup. Footnotes are supported [^1] and there can be more than one [^2].

_Emphasis_ is for stressed words (or when you just want _italics_), `code` is for anything a machine might read, ~~deleted~~ is for showing your working, and **bold** is used sparingly.

Hex colours in `code` are displayed as colour chips: `#ff6aff`.

[^1]: This is a footnote. It lives at the bottom of the article and links back to where it came from.

[^2]: A second footnote, here to check that numbering and the spacing hold up.

## An `h2` heading

Headings are for structure, not bigger text. They get an anchor `id` for free, and sit closer to the text they introduce than the text they follow.

Blockquotes have their quotation marks added for them. Attribution is in the paragraph that follows the quote.

> One more attribute the modern typographer must have: the capacity for taking great pains with seemingly unimportant detail. To him, one typographical point must be as important as one inch, and he must harden his heart against the accusation of being too fussy.

[Hans P. Schmoller](http://www.germandesigners.net/designers/hans_peter_schmoller), in _Book Design Today_, _Printing Review_, Spring 1951

### An `h3` heading

Unordered lists are for items with no sequence, like

- this one
- that one
- the other one

Ordered lists are for sequenced items, and can reach double digits without the numbers colliding with the text

1.  first item
1.  second item
1.  third item
1.  fourth item
1.  fifth item
1.  sixth item
1.  seventh item
1.  eighth item
1.  ninth item
1.  tenth item

Nested lists mix both, and the indentation has to make the hierarchy obvious at a glance

1. First, get these ingredients
   - carrots
   - celery
   - lentils
2. Boil some water
3. Dump everything in the pot

   Do not bump wooden spoon or it will fall

#### An `h4` heading

A code block with no language is set plain.

```
define foo() {
  print "bar";
}
```

A code block with a language is syntax-highlighted, in the site's own colours.

```js
/* TODO: turn Markdown -> HTML, then publish. */

import { Article } from "./article.js";

const AMBIGUOUS = "oO0 iIlL1 g9qCGQ";
const HEX = /#[0-9a-f]{6}/gi;

export class KitchenSink extends Article {
  static demonstrations = 0;

  constructor() {
    super({
      aboutItself: true,
      published: "2026-09-17",
      revised: "2026-09-18",
      slug: "kitchen-sink",
    });
  }

  demonstrate(feature) {
    if (feature === "reading time") return null;
    KitchenSink.demonstrations += 1;

    return `${feature} => demonstrated`;
  }
}

const sink = new KitchenSink();
const done = ["footnotes", "lists", "tables"]
  .map((f) => sink.demonstrate(f))
  .filter((d) => d !== null);

console.log(done.length >= 3, HEX.test("#ff6aff"));
```

##### An `h5` heading

Tables are set smaller in a condensed width. Every cell is bordered, every other row striped.

| Element    |  Where   | Count |
| :--------- | :------: | ----: |
| blockquote |  above   |     1 |
| image      |  below   |     1 |
| **total**  | **here** | **2** |

###### An `h6` heading

Images are never wider than the text. The subtle rounded corners and shadow aren't in the image file.

![Monospaced](https://res.cloudinary.com/monospaced/image/upload/w_700,c_fill/v1789250805/2018-04-20_15.28.26--cyan--mid.png)

A horizontal rule is set as a short dashed divider.

---

1. ## Numbered headings

   Headings can also sit inside numbered lists like this one.

1. ## Heading level

   Numbered `h2` and `h3` lists are supported, this one is `h2`.

1. ## Counter width

   List numbers are set ultra-condensed to minimise the space they take up.

1. ## Hanging counters

   List numbers hang in the gutter in wider viewports.

1. ## Nested lists

   Numbered heading sections can contain lists.
   - like this one
   - it's short
   1. and this one
   1. it counts

1. ## Sixth item

   Four more items to get up to double digits…

1. ## Seventh item

1. ## Eighth item

1. ## Ninth item

1. ## Tenth item

   Double-digit numbers are set smaller, so ten takes up no more space than nine.

## Numbered `h3` headings

1. ### Heading level

   This numbered list is `h3` level, for use under an `h2` heading.

1. ### Counters

   Counters are set smaller here to match the `h3` heading size.

1. ### Nested lists

   Numbered `h3` heading sections can also contain lists.
   - like this one
   - it's also short
   1. and this one
   1. it also counts

1. ### Fourth item

   Six more items to get up to double digits…

1. ### Fifth item

1. ### Sixth item

1. ### Seventh item

1. ### Eighth item

1. ### Ninth item

1. ### Tenth item

   That's the last numbered heading item.

## The Markdown

The whole article in raw Markdown.

<!-- self-source -->

And that's the lot. The only thing below this sentence is the footnotes section.
