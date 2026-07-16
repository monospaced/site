import { select } from "@storybook/addon-knobs";
import React from "react";

import Block from "../Block";

import Space from "./Space";

export default {
  component: Space,
  title: "Components/Space",
};

export const basic = () => (
  <>
    <Block>Component</Block>
    <Space />
    <Block>Component</Block>
  </>
);

export const small = () => (
  <>
    <Block>Component</Block>
    <Space size="s" />
    <Block>Component</Block>
  </>
);

export const large = () => (
  <>
    <Block>Component</Block>
    <Space size="l" />
    <Block>Component</Block>
  </>
);

export const extraLarge = () => (
  <>
    <Block>Component</Block>
    <Space size="xl" />
    <Block>Component</Block>
  </>
);

export const knobs = () => (
  <>
    <Block>Component</Block>
    <Space size={select("size", [""].concat(Space.sizes)) || null} />
    <Block>Component</Block>
  </>
);

knobs.story = { parameters: { docs: { disable: true } } };
