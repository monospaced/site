/**
 * Shapes of the project's JSON field data. Global data lives in `src/_data/`
 * (namespaced by filename, e.g. `data.site.*`); page-scoped data lives in
 * template data files (`*.11tydata.json`) that merge onto the page's data.
 */

export interface LinkData {
  href: string;
  label: string;
}

export interface SiteData {
  /** Feed author name. */
  author: string;
  description: string;
  organization: string;
  title: string;
  url: string;
}

export interface HomeData {
  headline: string;
  subhead: string;
}

export interface NotFoundData {
  headline: string;
  message: string;
  title: string;
}

export interface FooterLink extends LinkData {
  /** Key into the brand icon map in `_lib/icons.ts`. */
  icon: string;
}

export interface FooterData {
  legal: {
    link: LinkData;
  };
  links: FooterLink[];
}

export type NavData = LinkData[];
