import { select, text } from "@storybook/addon-knobs";
import React from "react";

import Heading from "./Heading";

export default {
  component: Heading,
  title: "Components/Heading",
};

export const main = () => (
  <>
    <Heading size="xxxl">Hamburgefonstiv</Heading>
    <Heading size="xxl">Hamburgefonstiv</Heading>
    <Heading size="xl">Hamburgefonstiv</Heading>
    <Heading size="l">Hamburgefonstiv</Heading>
    <Heading size="m">Hamburgefonstiv</Heading>
    <Heading size="s">Hamburgefonstiv</Heading>
  </>
);

export const h1 = () => <Heading.H1>Hamburgefonstiv</Heading.H1>;

export const h2 = () => <Heading.H2>Hamburgefonstiv</Heading.H2>;

export const h3 = () => <Heading.H3>Hamburgefonstiv</Heading.H3>;

export const h4 = () => <Heading.H4>Hamburgefonstiv</Heading.H4>;

export const h5 = () => <Heading.H5>Hamburgefonstiv</Heading.H5>;

export const h6 = () => <Heading.H6>Hamburgefonstiv</Heading.H6>;

export const level = () => (
  <Heading level="1" size="xl">
    Hamburgefonstiv
  </Heading>
);

export const color = () => (
  <Heading color="color-brand-primary-dark" size="xl">
    Hamburgefonstiv
  </Heading>
);

export const basic = () => <Heading>Hamburgefonstiv</Heading>;

basic.story = { parameters: { docs: { disable: true } } };

export const knobs = () => (
  <div>
    <Heading
      color={select("color", [""].concat(Heading.colors), "") || null}
      level={select("level", [""].concat(Heading.levels), "") || null}
      size={select("size", Heading.sizes, "xl")}
    >
      {text("text", "Hamburgefonstiv")}
    </Heading>
  </div>
);

knobs.story = { parameters: { docs: { disable: true } } };
