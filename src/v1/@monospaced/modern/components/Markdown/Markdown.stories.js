import { MDXProvider } from "@mdx-js/react";
import { select } from "@storybook/addon-knobs";
import React from "react";

import Grid from "../Grid";
import Space from "../Space";
import Surface from "../Surface";

import Markdown, { mdxComponents } from "./";
import Mdx from "./__mocks__/basic.mock.mdx";
import MdxSample from "./__mocks__/sample.mock.mdx";

export default {
  component: Markdown,
  title: "Components/Markdown",
};

export const basic = () => (
  <MDXProvider components={mdxComponents}>
    <Markdown>
      <Mdx />
    </Markdown>
  </MDXProvider>
);

export const sample = () => (
  <MDXProvider components={mdxComponents}>
    <Markdown>
      <MdxSample />
    </Markdown>
  </MDXProvider>
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
    <Grid>
      <Grid.Item colSpan="4">
        <Space />
        <MDXProvider components={mdxComponents}>
          <Markdown>
            <MdxSample />
          </Markdown>
        </MDXProvider>
      </Grid.Item>
    </Grid>
  </Surface>
);

knobs.story = { parameters: { docs: { disable: true } } };
