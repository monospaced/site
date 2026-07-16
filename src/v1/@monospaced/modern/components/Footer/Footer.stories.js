import { number, text } from "@storybook/addon-knobs";
import React from "react";

import Footer from "./Footer";

export default {
  component: Footer,
  title: "Components/Footer",
};

export const basic = () => (
  <Footer
    copyright="Monospaced"
    links={[
      {
        href: "https://example.com",
        text: "item-1",
      },
      {
        href: "https://example.com",
        text: "item-2",
      },
      {
        href: "https://example.com",
        text: "item-3",
      },
    ]}
  />
);

export const knobs = () => {
  const numberOfItems = number(
    "number of links",
    3,
    {
      max: 7,
      min: 1,
      range: true,
    },
    "Story",
  );
  const copyright = text("copyright", "Monospaced", "Footer");

  return (
    <Footer
      copyright={copyright}
      links={[...Array(numberOfItems).keys()].map(i => ({
        href: text("link href", "https://example.com", "Footer"),
        text: `${text("link text", "item", "Footer")}-${i + 1}`,
      }))}
    />
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
