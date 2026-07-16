import {
  BladudFlies,
  Chartwells,
  Digitas,
  DowJones,
  FindMyPast,
  Freeform,
  GrandUnion,
  Hanno,
  Hubble,
  MajorPlayers,
  NationalLottery,
  Nhs,
  Ogilvy,
  Social360,
  Stordis,
  ThomsonReuters,
} from "./svg";
import { ARCHIVE_LEGAL_PATH, DESIGN_SYSTEM_PATH } from "../../sitePaths";

export default {
  blog: {
    heading: "Blog",
    posts: [], // require("./blog").default,
  },
  clients: {
    heading: "Selected clients",
    list: [
      {
        href: "http://bladudflies.com",
        label: "Bladud Flies!",
        Logo: BladudFlies,
      },
      {
        href: "https://www.compass-group.co.uk",
        label: "Chartwells",
        Logo: Chartwells,
      },
      {
        href: "https://www.digitas.com",
        label: "Digitas",
        Logo: Digitas,
      },
      {
        href: "https://www.dowjones.com",
        label: "Dow Jones",
        Logo: DowJones,
      },
      {
        href: "https://www.findmypast.co.uk",
        label: "Find My Past",
        Logo: FindMyPast,
      },
      {
        href: "https://frfrm.com",
        label: "Freeform Labs",
        Logo: Freeform,
      },
      {
        href: "http://www.thegrandunion.com",
        label: "Grand Union",
        Logo: GrandUnion,
      },
      {
        href: "https://hanno.co",
        label: "Hanno",
        Logo: Hanno,
      },
      {
        href: "https://hubblehq.com/",
        label: "Hubble",
        Logo: Hubble,
      },
      {
        href: "https://www.majorplayers.co.uk",
        label: "Major Players",
        Logo: MajorPlayers,
      },
      {
        href: "https://www.national-lottery.co.uk",
        label: "The National Lottery",
        Logo: NationalLottery,
      },
      {
        href: "https://www.nhs.uk",
        label: "NHS",
        Logo: Nhs,
      },
      {
        href: "https://www.ogilvy.com",
        label: "Ogilvy",
        Logo: Ogilvy,
      },
      {
        href: "http://www.social360monitoring.com",
        label: "Social 360",
        Logo: Social360,
      },
      {
        href: "https://www.stordis.com",
        label: "Stordis",
        Logo: Stordis,
      },
      {
        href: "https://www.thomsonreuters.com",
        label: "Thomson Reuters",
        Logo: ThomsonReuters,
      },
    ],
  },
  footer: {
    links: [
      {
        href: ARCHIVE_LEGAL_PATH,
        routerLink: true,
        text: "legal",
      },
      {
        href: "https://github.com/mnspcd/monospaced.com",
        text: "view-source",
      },
    ],
  },
  legal: {
    company: {
      content: require("./legal/company.mdx").default,
      heading: "Company details",
    },
    heading: "Legal matters",
    privacy: {
      content: require("./legal/privacy.mdx").default,
      heading: "Privacy policy",
    },
  },
  masthead: {
    links: [
      /* {
        href: "/blog/",
        routerLink: true,
        text: "blog",
      }, */
      {
        href: DESIGN_SYSTEM_PATH,
        text: "design-system",
      },
      {
        href: "mailto:hello@monospaced.com",
        text: "hello@monospaced.com",
      },
    ],
  },
  meta: {
    description: "Modern web software solutions",
    title: "Monospaced",
  },
  services: {
    heading: "Our services",
    list: [
      "Design systems engineering",
      "Front-end development",
      "Legacy code rescue",
      "Prototyping, concepts & MVPs",
      "Web applications",
    ],
  },
};
