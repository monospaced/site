import { select, text } from "@storybook/addon-knobs";
import React from "react";

import Group from "../Group";

import Logomark from "./Logomark";

export default {
  component: Logomark,
  title: "Components/Logomark",
};

export const basic = () => <Logomark title="Monospaced" width="6em" />;

export const blue = () => (
  <Group>
    <Group.Item>
      <Logomark color="color-azure-4" width="6em" />
    </Group.Item>
    <Group.Item>
      <Logomark color="color-blue-7" width="6em" />
    </Group.Item>
    <Group.Item>
      <Logomark color="color-blue-9" width="6em" />
    </Group.Item>
  </Group>
);

export const green = () => (
  <Group>
    <Group.Item>
      <Logomark color="color-green-4" width="6em" />
    </Group.Item>
    <Group.Item>
      <Logomark color="color-green-7" width="6em" />
    </Group.Item>
    <Group.Item>
      <Logomark color="color-green-7" secondColor="color-green-3" width="6em" />
    </Group.Item>
  </Group>
);

export const red = () => (
  <Group>
    <Group.Item>
      <Logomark color="color-red-6" width="6em" />
    </Group.Item>
    <Group.Item>
      <Logomark color="color-red-8" width="6em" />
    </Group.Item>
    <Group.Item>
      <Logomark color="color-red-8" secondColor="color-red-5" width="6em" />
    </Group.Item>
  </Group>
);

export const white = () => (
  <Group>
    <Group.Item>
      <Logomark
        color="color-white"
        backgroundColor="color-grey-4"
        padding="0.75em"
        width="6em"
      />
    </Group.Item>
    <Group.Item>
      <Logomark
        color="color-white"
        backgroundColor="color-azure-4"
        padding="0.75em"
        width="6em"
      />
    </Group.Item>
    <Group.Item>
      <Logomark
        color="color-white"
        backgroundColor="color-red-8"
        padding="0.75em"
        width="6em"
      />
    </Group.Item>
  </Group>
);

const selectColor = [""].concat(Logomark.colors);
const selectSecondColor = ["", "true"].concat(Logomark.colors);

export const knobs = () => (
  <Logomark
    backgroundColor={select("backgroundColor", selectColor) || null}
    color={select("color", selectColor) || null}
    padding={text("padding", "")}
    secondColor={
      (select("secondColor", selectSecondColor) === "true"
        ? true
        : select("secondColor", selectSecondColor)) || null
    }
    title={text("title", "")}
    width={text("width", "6em")}
  />
);

knobs.story = { parameters: { docs: { disable: true } } };
