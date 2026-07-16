import { number, text } from "@storybook/addon-knobs";
import React from "react";

import Toc from "./Toc";

export default {
  component: Toc,
  title: "Components/Toc",
};

export const basic = () => (
  <Toc>
    <Toc.Item date="2018-06-11" slug="" title="Item-1" />
    <Toc.Item date="2018-06-12" slug="" title="Item-2" />
    <Toc.Item date="2018-06-13" slug="" title="Item-3" />
  </Toc>
);

export const knobs = () => {
  const numberOfItems = number(
    "number of items",
    4,
    {
      range: true,
      min: 1,
      max: 20,
    },
    "Story",
  );

  return (
    <Toc>
      {[...Array(numberOfItems).keys()].map(i => (
        <Toc.Item
          date={`${text("date", "2018-06-", "Component")}${i + 11}`}
          key={`item-${i + 1}`}
          title={`${text("title", "Item", "Component")}-${i + 1}`}
        />
      ))}
    </Toc>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
