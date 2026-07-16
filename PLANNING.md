# Homepage Reset / `v1` Archive Plan

## Branch

Working branch: `static-home-v1-archive`

## Goal

Replace the current site root with a new handwritten static homepage at `/index.html`, and move the current React/webpack-generated site into a static archive under `/v1/`.

## Desired End State

- `/index.html` is a new standalone static homepage built with plain HTML/CSS/JS.
- `/404.html` is a new standalone static error page for the root site.
- The existing React site is still buildable, but is published under `/v1/` instead of `/`.
- Search engines are discouraged from indexing `/v1/`.
- `src/legacy/` is removed if nothing public depends on it.
- Lighthouse-specific build/deploy steps are removed.

## Current Constraints Discovered

- The current site is a webpack build using `static-site-generator-webpack-plugin`.
- The build assumes it owns `/`:
  - webpack `publicPath` is `/`
  - the generated document references `/bundle.js`, `/styles.css`, favicons, fonts, and manifest from root
  - React Router links also assume `/`
- Storybook currently builds to `build/design-system`.
- The masthead currently uses a mobile hamburger/menu state when there is more than one link.
- `src/legacy/` is present in the repo but is not currently copied into the build.
- Lighthouse is still wired into `package.json` deploy scripts even though it is no longer wanted.
- `src/assets/.htaccess` is still imported and bundled, but should be treated as legacy unless deployment proves otherwise.
- The live site currently falls back to Netlify's default 404, so custom 404 handling is not yet configured.

## Planning Assumptions

- We should optimize for the simplest migration that leaves a stable archive.
- The new homepage does not need to reuse the React app or design system.
- We should default to preserving the published design system and current archive navigation unless implementation proves too costly.
- Legal can still be dropped if it turns into disproportionate migration overhead.
- We should not plan around Apache-specific behavior unless we discover a real Netlify equivalent we need to keep.

## Preferred Scope

### Required

1. Add a new root static homepage:
   - `index.html`
   - root-level CSS and JS as needed
2. Add a new root static 404 page:
   - `404.html`
   - matching lightweight CSS/JS only if needed
3. Move the current React site to `/v1/`.
4. Rebase archive routing and asset URLs so the archive works correctly under `/v1/`.
5. Keep Storybook published from the archive, ideally under `/v1/design-system/`.
6. Keep the current archive masthead behavior, including the design-system link and hamburger menu.
7. Prevent indexing of archive pages.
8. Add Netlify configuration for the custom 404 behavior.
9. Remove Lighthouse build/deploy code.
10. Remove `src/legacy/`.

### Nice to Have

1. Keep legal available under `/v1/legal/`.

### Safe Cuts

1. Remove the legal page entirely if it complicates the first migration.
2. Remove the email link from the archive masthead if nav simplification becomes necessary.
3. Simplify the hamburger behavior only if Storybook or nav rebasing exposes real implementation issues.
4. Drop Storybook only as a fallback if rebasing it under `/v1/` is materially more work than the rest of the migration.

## Recommended Implementation Strategy

### Phase 1: Separate the new root site from the archive

1. Introduce a root static site entry:
   - root `index.html`
   - root CSS/JS files
2. Add a root static `404.html` page.
3. Add or update Netlify config so the deployed site serves the custom 404 page.
4. Keep the React app as the archive app, but make its output land in `build/v1/`.

### Phase 2: Rebase the React archive to `/v1/`

1. Update webpack output assumptions:
   - output path to support `build/v1`
   - `publicPath` to `/v1/`
2. Update generated document asset URLs:
   - CSS bundle
   - JS bundle
   - favicons/manifest
   - font preloads
3. Update router behavior so client-side navigation works from `/v1/` rather than `/`.
4. Update hardcoded links in content and components:
   - masthead home link
   - legal link
   - design-system link if retained
   - any MDX/static asset references that assume root

### Phase 3: Simplify archive scope

1. Preserve the current masthead structure and menu behavior while rebasing links to `/v1/`.
2. Keep the design-system link if Storybook survives under `/v1/design-system/`.
3. If legal is removed:
   - remove legal content imports
   - remove route
   - remove footer link
   - delete related tests/snapshots
4. Only simplify email or hamburger behavior if the preserved nav becomes a real maintenance or layout problem after the move.

### Phase 4: Remove obsolete code paths

1. Delete Lighthouse scripts, dependency, and deploy helper.
2. Delete `src/legacy/`.
3. Remove any tests, mocks, or snapshots that only exist for deleted features.

### Phase 5: Archive SEO controls

Preferred approach:

1. Add `<meta name="robots" content="noindex, nofollow">` to archive pages.

Reason:

- `robots.txt` is root-scoped and is a weak fit if the new root homepage should still be indexable while `/v1/` should not.
- page-level noindex is more precise for an archive subpath.

## Storybook Decision Path

### Preferred

Keep Storybook and publish it under `/v1/design-system/`.

Likely work:

- change Storybook build output from `build/design-system` to `build/v1/design-system`
- verify Storybook asset URLs and internal routing under `/v1/design-system/`
- update archive links accordingly

### Fallback

Drop Storybook from this migration:

- remove archive nav link
- remove `storybook:build` from the main build
- keep component code in-repo without publishing the docs site

## Legal Decision Path

### Preferred

Try to keep legal if it works naturally after the `/v1/` rebase.

### Fallback

Remove legal completely for this pass if it creates routing or content overhead.

## Proposed File/Area Touch List

- `package.json`
- `webpack.config.babel.js`
- `netlify.toml` or equivalent Netlify config artifact
- `src/index.js`
- `src/routes/index.js`
- `src/routes/content/index.js`
- `src/@monospaced/modern/components/Masthead/*`
- `src/routes/components/*` and snapshots affected by navigation/legal changes
- new root static files such as `index.html`, `404.html`, `styles.css`, `script.js` or similar
- delete `bin/deploy-lighthouse.sh`
- delete `src/legacy/`

## Risks To Handle Explicitly

1. React Router basename/history support under `/v1/` may need careful adjustment, not just link changes.
2. Root-relative asset URLs in the generated HTML will break the archive unless all are rebased.
3. Storybook may have its own asset-path assumptions and may not be worth carrying.
4. Netlify 404 behavior needs to be made explicit in-repo rather than assumed from defaults.
5. Snapshot tests will need targeted pruning or regeneration after nav/legal changes.
6. Preserving the current archive nav means we need to verify the hamburger and multi-link layout still behave correctly after URL rebasing.

## Acceptance Criteria

1. Visiting `/` serves the new static homepage.
2. Visiting an unknown route serves the custom static 404 page instead of the Netlify default page.
3. Visiting `/v1/` serves the archived current site.
4. Archive navigation stays within `/v1/`.
5. The archive masthead still exposes the design-system link and current menu behavior unless we explicitly decide to simplify it.
6. If retained, Storybook is reachable at `/v1/design-system/`.
7. Archive assets load from `/v1/` correctly.
8. `/v1/` pages emit `noindex`.
9. Lighthouse build/deploy code is gone.
10. `src/legacy/` is removed.
11. The repo build reflects the new structure without shipping dead archive-only extras unless explicitly retained.

## Recommended Order Of Work

1. Create the root static homepage scaffold.
2. Add the root static 404 page and Netlify config.
3. Rebase the archive build to `/v1/`.
4. Rebase Storybook to `/v1/design-system/` and preserve the current archive nav.
5. Remove Lighthouse and `src/legacy/`.
6. Decide whether legal survives.
7. Verify build output and route behavior.

## Default Decisions Unless We Change Them

- Keep the migration simple over preserving every legacy surface.
- Preserve the design-system link and current hamburger nav unless they prove troublesome in implementation.
- Keep legal only if cheap.
- Keep Storybook as part of the default target.
- Use `noindex` on archive pages rather than blocking `/v1/` via root `robots.txt`.
- Ignore Apache `.htaccess` unless deployment constraints force us to revisit it.
- Treat custom Netlify 404 handling as part of the migration, not a follow-up.
