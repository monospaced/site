# Opportunity roadmap

This roadmap is intentionally fluid: items can move freely between `NOW`, `NEXT`, and `LATER` as priorities and discoveries change.

## Now

What we're working on now.

## Next

What we could be working on next.

- Add article hero image support

### Note tags

- Wait for ~5 articles to classify
- Start using the `tags` front matter field (reserved since v1; 11ty builds a collection per tag for free)
- Add tag index pages at `/notes/tags/<tag>/` — one `.11ty.ts` template paginated over tag collections
- Render tags on note pages and `/notes/` rows
- Map tags to Atom `<category>` in the feed entries
- Exclude 11ty's built-in `all`/notes collections from tag pages; sitemap picks tag URLs up automatically
- Nothing moves: item URLs carry no tag, per v1

## Later

Everything we could attempt given sufficient time and resources.

### Mailing list

- Set up infra, driven from RSS
- Add subscribe CTA to homepage
- Update privacy policy

### Services

- Write copy for diagnostic product
