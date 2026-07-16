import React from "react";

/* eslint-disable react/display-name */
module.exports = {
  blog: {
    heading: "Blog",
    posts: [
      {
        default: () => <div />,
        meta: {
          date: "2018-10-07",
          layout: () => <div />,
          slug: "slug",
          title: "title",
        },
      },
    ],
  },
  clients: {
    heading: "Selected clients",
    list: [
      {
        href: "http://bladudflies.com",
        label: "Bladud Flies!",
        Logo: () => <div />,
      },
      {
        href: "https://www.compass-group.co.uk",
        label: "Chartwells",
        Logo: () => <div />,
      },
      {
        href: "https://www.digitas.com",
        label: "Digitas",
        Logo: () => <div />,
      },
      {
        href: "https://www.dowjones.com",
        label: "Dow Jones",
        Logo: () => <div />,
      },
      {
        href: "https://www.findmypast.co.uk",
        label: "Find My Past",
        Logo: () => <div />,
      },
      {
        href: "https://frfrm.com",
        label: "Freeform Labs",
        Logo: () => <div />,
      },
      {
        href: "http://www.thegrandunion.com",
        label: "Grand Union",
        Logo: () => <div />,
      },
      {
        href: "https://hanno.co",
        label: "Hanno",
        Logo: () => <div />,
      },
      {
        href: "https://www.majorplayers.co.uk",
        label: "Major Players",
        Logo: () => <div />,
      },
      {
        href: "https://www.national-lottery.co.uk",
        label: "The National Lottery",
        Logo: () => <div />,
      },
      {
        href: "https://www.nhs.uk",
        label: "NHS",
        Logo: () => <div />,
      },
      {
        href: "https://www.ogilvy.com",
        label: "Ogilvy",
        Logo: () => <div />,
      },
      {
        href: "http://www.social360monitoring.com",
        label: "Social 360",
        Logo: () => <div />,
      },
      {
        href: "https://www.stordis.com",
        label: "Stordis",
        Logo: () => <div />,
      },
      {
        href: "http://wearesuburb.com",
        label: "Suburb",
        Logo: () => <div />,
      },
      {
        href: "https://www.thomsonreuters.com",
        label: "Thomson Reuters",
        Logo: () => <div />,
      },
    ],
  },
  footer: {
    links: [
      {
        href: "/v1/legal/",
        routerLink: true,
        text: "legal",
      },
      {
        href: "https://github.com/monospaced/monospaced.com",
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
      {
        href: "/v1/design-system/?path=/docs/introduction--page",
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
/* eslint-enable */
