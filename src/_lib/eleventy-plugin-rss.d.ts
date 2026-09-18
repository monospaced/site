/** The plugin ships no type declarations; only the helpers used here. */
declare module "@11ty/eleventy-plugin-rss" {
  /** Formats a date as RFC 3339, as required by Atom. */
  export function dateToRfc3339(date: Date): string;
  /** Rewrites relative URLs in HTML (href, src, …) against an absolute base. */
  export function convertHtmlToAbsoluteUrls(
    htmlContent: string,
    base: string,
    processOptions?: object,
  ): Promise<string>;
}
