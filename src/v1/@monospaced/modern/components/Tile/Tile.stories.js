import React from "react";
import { select, text } from "@storybook/addon-knobs";

import Group from "../Group";
import Logomark from "../Logomark";
import Surface from "../Surface";

import Tile from "./Tile";

export default {
  component: Tile,
  title: "Components/Tile",
};

export const basic = () => (
  <Tile href="#" label="Monospaced" width="8.5em">
    <Logomark width="78.72%" />
  </Tile>
);

export const onDarkBackground = () => (
  <Surface backgroundColor="grey-dark">
    <div style={{ padding: "1em" }}>
      <Tile href="#" label="Monospaced" width="8.5em">
        <Logomark width="78.72%" />
      </Tile>
    </div>
  </Surface>
);

export const tessellation = () => (
  <Group tessellate>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
    <Group.Item>
      <Tile href="https://example.com" label="Label">
        <Logomark width="100%" />
      </Tile>
    </Group.Item>
  </Group>
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
    <Tile
      href={text("href", "https://example.com")}
      label={text("label", "Label")}
      width={text("width", "8.5em")}
    >
      <Logomark width="78.72%" />
    </Tile>
  </Surface>
);

knobs.story = { parameters: { docs: { disable: true } } };
