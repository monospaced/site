import { boolean, number } from "@storybook/addon-knobs";
import React from "react";

import Block from "../Block";

import Group, { Item } from "./Group";

export default {
  component: Group,
  parameters: {
    subcomponents: {
      "Group.Item": Item,
    },
  },
  title: "Components/Group",
};

export const basic = () => (
  <Group>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
  </Group>
);

export const tessellate = () => (
  <Group tessellate>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
    <Group.Item>
      <Block>Item</Block>
    </Group.Item>
  </Group>
);

export const knobs = () => {
  const numberOfItems = number(
    "number of items",
    4,
    {
      range: true,
      min: 1,
      max: 16,
    },
    "Story",
  );

  return (
    <Group tessellate={boolean("tessellate", false, "Group")}>
      {[...Array(numberOfItems).keys()].map(i => (
        <Group.Item key={i}>
          <Block>Item</Block>
        </Group.Item>
      ))}
    </Group>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
