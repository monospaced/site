import { number, select, text } from "@storybook/addon-knobs";
import React from "react";

import Block from "../Block";

import Grid, { Item } from "./Grid";

export default {
  component: Grid,
  parameters: {
    subcomponents: {
      "Grid.Item": Item,
    },
  },
  title: "Components/Grid",
};

export const basic = () => (
  <Grid padding="0">
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item>
      <Block height="4.5em" />
    </Grid.Item>
  </Grid>
);

export const centered = () => (
  <Grid padding="0">
    <Grid.Item colSpan="8" colStart="3">
      <Block height="4.5em" />
    </Grid.Item>
  </Grid>
);

export const sideNote = () => (
  <Grid>
    <Grid.Item align="center" colSpan="2">
      <Block />
    </Grid.Item>
    <Grid.Item colSpan="8">
      <Block height="4.5em" />
    </Grid.Item>
  </Grid>
);

export const constrained = () => (
  <Grid padding="0">
    <Grid.Item colSpan="10">
      <Block height="4.5em" />
    </Grid.Item>
  </Grid>
);

export const sideBar = () => (
  <Grid padding="0">
    <Grid.Item colSpan="4">
      <Block height="4.5em" />
    </Grid.Item>
    <Grid.Item colSpan="8">
      <Block height="4.5em" />
    </Grid.Item>
  </Grid>
);

export const knobs = () => {
  const numberOfItems = number(
    "number of items",
    12,
    {
      range: true,
      min: 1,
      max: 24,
    },
    "Story",
  );

  return (
    <Grid padding={text("padding", "0 1em", "Grid")}>
      <Grid.Item
        align={
          select("align", [""].concat(Grid.alignments), "", "Grid.Item") || null
        }
        colSpan={text("colSpan", "", "Grid.Item")}
        colStart={text("colStart", "", "Grid.Item")}
        justify={
          select("justify", [""].concat(Grid.alignments), "", "Grid.Item") ||
          null
        }
        rowSpan={text("rowSpan", "", "Grid.Item")}
        rowStart={text("rowStart", "", "Grid.Item")}
      >
        <Block></Block>
      </Grid.Item>
      {[...Array(numberOfItems - 1).keys()].map(i => (
        <Grid.Item key={i}>
          <Block height="4.5em" />
        </Grid.Item>
      ))}
    </Grid>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
