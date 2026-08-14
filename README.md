# Monospaced

Website for [monospaced.com](https://monospaced.com).

An [Eleventy](https://www.11ty.dev) site built with the
[Set](https://set.monospaced.com) design system (HTML/SSR route). The previous
site is preserved as a static archive under [src/v1/](src/v1/) and copied
verbatim into the build.

## Structure

- `src/*.11ty.ts` — page templates, composed from Set SSR renderers
- `src/_includes/base.11ty.ts` — base layout (head, header, footer, Set root)
- `src/_data/*.json` — structured content (Eleventy global data)
- `src/_content/*.md` — prose fragments read by templates, rendered with `@monospaced/set-markdown`
- `src/v1/` — static v1 archive, passthrough-copied to `/v1/`

## Develop

```sh
pnpm install
pnpm dev        # serve with live reload
pnpm build      # build to dist/
pnpm typecheck
pnpm lint
pnpm lint:css
```

Deployed on Netlify — see [netlify.toml](netlify.toml).
