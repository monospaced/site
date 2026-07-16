import { select } from "@storybook/addon-knobs";
import React from "react";
import * as Icons from "react-feather";

import Grid from "../Grid";
import { mdrnColor as colors } from "../../tokens/color";

export default {
  parameters: { componentSubtitle: "React Feather Icons" },
  title: "Components/Icons",
};

export const basic = () => <Icons.Star />;

export const color = () => <Icons.Star color={colors["color-pink-6"]} />;

export const sizeSmall = () => <Icons.Star size={20} />;

sizeSmall.story = { name: "Size 20px" };

export const sizeLarge = () => <Icons.Star size="100%" />;

sizeLarge.story = { name: "Size 100%" };

export const knobs = () => {
  const colorKeys = Object.keys(colors).filter(
    colorKey => !colorKey.includes("-rgb"),
  );
  const iconKeys = Object.keys(Icons).sort();
  const Icon = Icons[select("Icon", iconKeys, "Activity")];

  return (
    <Grid>
      <Grid.Item colSpan="1">
        <Icon
          color={colors[select("color", [""].concat(colorKeys))] || undefined}
          size={select("size", ["20", "24", "100%"], "100%") || undefined}
        />
      </Grid.Item>
    </Grid>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
