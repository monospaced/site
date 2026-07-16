# Homepage Reset / Static Archive Plan

## Branch

Working branch: `static-home-v1-archive`

## Goal

Serve a fully static site from the repo with:

- a handwritten homepage at `/`
- a handwritten root `404.html`
- a frozen static archive at `/v1/`

## Final Direction

- `site/` is the source of truth for deployment.
- `site/index.html` is the new homepage.
- `site/404.html` is the root 404 page.
- `site/v1/` is committed static archive output.
- Netlify publishes `site/` directly with no build command.
- React, webpack, Storybook, Jest, Babel, PostCSS, and archive source code are removed.
- Search engines are discouraged from indexing `/v1/`.

## Notes

- `site/v1/` was generated from the archive build and committed as static files.
- Minor archive tweaks can now be made directly in the static files under `site/v1/`.
- Netlify keeps the custom 404 and `/v1/*` `noindex` behavior via `netlify.toml`.
