/**
 * Date helpers for note pages and the feed. Front-matter dates arrive as
 * `Date` objects from YAML, but tolerate ISO strings too. All output is
 * anchored to UTC so a date-only value never shifts across a day boundary.
 */

export const toDate = (value: Date | string): Date =>
  value instanceof Date ? value : new Date(value);

/** Date-only ISO 8601 string, e.g. "2026-09-16". Used for display and as
 * the machine-readable `<time>` content. */
export const isoDate = (value: Date | string): string =>
  toDate(value).toISOString().slice(0, 10);
