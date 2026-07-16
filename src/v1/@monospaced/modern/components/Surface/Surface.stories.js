import { select } from "@storybook/addon-knobs";
import React from "react";

import Surface from "./Surface";

export default {
  component: Surface,
  title: "Components/Surface",
};

const ExampleContent = () => (
  <div className="u-monospaced" style={{ padding: "1em" }}>
    Text <br />
    <a href="#">Link</a>
  </div>
);

export const basic = () => (
  <Surface backgroundColor="grey-light">
    <ExampleContent />
  </Surface>
);

export const white = () => (
  <Surface backgroundColor="white">
    <ExampleContent />
  </Surface>
);

export const greyLight = () => (
  <Surface backgroundColor="grey-light">
    <ExampleContent />
  </Surface>
);

export const greyDark = () => (
  <Surface backgroundColor="grey-dark">
    <ExampleContent />
  </Surface>
);

export const black = () => (
  <Surface backgroundColor="black">
    <ExampleContent />
  </Surface>
);

export const knobs = () => (
  <Surface
    backgroundColor={select(
      "backgroundColor",
      Surface.backgroundColors,
      "white",
    )}
  >
    <ExampleContent />
  </Surface>
);

knobs.story = { parameters: { docs: { disable: true } } };
