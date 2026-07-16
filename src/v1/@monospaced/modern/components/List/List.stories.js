import { boolean, number, text } from "@storybook/addon-knobs";
import React from "react";

import List from "./List";

export default {
  component: List,
  title: "Components/List",
};

export const basic = () => (
  <List>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
  </List>
);

export const ordered = () => (
  <List ordered>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
  </List>
);

export const knobs = () => {
  const numberOfItems = number(
    "number of items",
    3,
    {
      range: true,
      min: 1,
      max: 99,
    },
    "Story",
  );
  const isOrdered = boolean("ordered", false, "List");
  const itemText = text(
    "item text",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "List",
  );

  return (
    <List ordered={isOrdered}>
      {[...Array(numberOfItems).keys()].map(i => (
        <li key={i}>{itemText}</li>
      ))}
    </List>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
