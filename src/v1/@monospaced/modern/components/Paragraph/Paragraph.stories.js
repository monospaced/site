import { text } from "@storybook/addon-knobs";
import React from "react";

import Paragraph from "./Paragraph";

export default {
  component: Paragraph,
  title: "Components/Paragraph",
};

export const basic = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Paragraph>
);

export const knobs = () => (
  <Paragraph>
    {text(
      "text",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    )}
  </Paragraph>
);

knobs.story = { parameters: { docs: { disable: true } } };
