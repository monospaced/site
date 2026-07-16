import { select } from "@storybook/addon-knobs";
import React from "react";

import Surface from "../Surface";

import Rule from "./Rule";

export default {
  component: Rule,
  title: "Components/Rule",
};

export const basic = () => <Rule />;

export const onDarkBackground = () => (
  <Surface backgroundColor="grey-dark">
    <div style={{ padding: "1em" }}>
      <Rule />
    </div>
  </Surface>
);

export const knobs = () => (
  <Surface
    backgroundColor={select(
      "backgroundColor",
      Surface.backgroundColors,
      "white",
      "Surface",
    )}
  >
    <Rule />
  </Surface>
);

knobs.story = { parameters: { docs: { disable: true } } };
