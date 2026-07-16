import { select, text } from "@storybook/addon-knobs";
import React from "react";

import Logotype from "./Logotype";

export default {
  component: Logotype,
  title: "Components/Logotype",
};

export const basic = () => <Logotype height="3em" />;

export const color = () => <Logotype color="color-blue-9" height="3em" />;

export const knobs = () => (
  <Logotype
    color={select("color", ["currentColor"].concat(Logotype.colors)) || null}
    height={text("height", "3em")}
    width={text("width", "")}
  />
);

knobs.story = { parameters: { docs: { disable: true } } };
