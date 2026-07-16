import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";
import * as Icons from "react-feather";

import Group from "../Group";
import Poster from "../Poster";
import Space from "../Space";
import Surface from "../Surface";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const basic = () => (
  <Group>
    <Group.Item>
      <Button icon={<Icons.Star size="100%" />}>Default</Button>
    </Group.Item>
    <Group.Item>
      <Button icon={<Icons.Star size="100%" />} styleVariant="outlined">
        Outlined
      </Button>
    </Group.Item>
    <Group.Item>
      <Button icon={<Icons.Star size="100%" />} styleVariant="flat">
        Flat
      </Button>
    </Group.Item>
  </Group>
);

export const textOnly = () => (
  <Group>
    <Group.Item>
      <Button>Default</Button>
    </Group.Item>
    <Group.Item>
      <Button styleVariant="outlined">Outlined</Button>
    </Group.Item>
    <Group.Item>
      <Button styleVariant="flat">Flat</Button>
    </Group.Item>
  </Group>
);

export const iconOnly = () => (
  <Group>
    <Group.Item>
      <Button icon={<Icons.Star size="100%" />} />
    </Group.Item>
    <Group.Item>
      <Button icon={<Icons.Star size="100%" />} styleVariant="outlined" />
    </Group.Item>
    <Group.Item>
      <Button icon={<Icons.Star size="100%" />} styleVariant="flat" />
    </Group.Item>
  </Group>
);

export const danger = () => (
  <Group>
    <Group.Item>
      <Button colorVariant="danger" icon={<Icons.Star size="100%" />}>
        Default
      </Button>
    </Group.Item>
    <Group.Item>
      <Button
        colorVariant="danger"
        icon={<Icons.Star size="100%" />}
        styleVariant="outlined"
      >
        Outlined
      </Button>
    </Group.Item>
    <Group.Item>
      <Button
        colorVariant="danger"
        icon={<Icons.Star size="100%" />}
        styleVariant="flat"
      >
        Flat
      </Button>
    </Group.Item>
  </Group>
);

export const disabled = () => (
  <Group>
    <Group.Item>
      <Button disabled icon={<Icons.Star size="100%" />}>
        Default
      </Button>
    </Group.Item>
    <Group.Item>
      <Button
        disabled
        icon={<Icons.Star size="100%" />}
        styleVariant="outlined"
      >
        Outlined
      </Button>
    </Group.Item>
    <Group.Item>
      <Button disabled icon={<Icons.Star size="100%" />} styleVariant="flat">
        Flat
      </Button>
    </Group.Item>
  </Group>
);

export const onDarkBackground = () => (
  <Surface backgroundColor="grey-dark">
    <div style={{ padding: "1em" }}>
      <Group>
        <Group.Item>
          <Button icon={<Icons.Star size="100%" />}>Default</Button>
        </Group.Item>
        <Group.Item>
          <Button icon={<Icons.Star size="100%" />} styleVariant="outlined">
            Outlined
          </Button>
        </Group.Item>
        <Group.Item>
          <Button icon={<Icons.Star size="100%" />} styleVariant="flat">
            Flat
          </Button>
        </Group.Item>
      </Group>
      <Space />
      <Group>
        <Group.Item>
          <Button colorVariant="danger" icon={<Icons.Star size="100%" />}>
            Default
          </Button>
        </Group.Item>
        <Group.Item>
          <Button
            colorVariant="danger"
            icon={<Icons.Star size="100%" />}
            styleVariant="outlined"
          >
            Outlined
          </Button>
        </Group.Item>
        <Group.Item>
          <Button
            colorVariant="danger"
            icon={<Icons.Star size="100%" />}
            styleVariant="flat"
          >
            Flat
          </Button>
        </Group.Item>
      </Group>
      <Space />
      <Group>
        <Group.Item>
          <Button disabled icon={<Icons.Star size="100%" />}>
            Default
          </Button>
        </Group.Item>
        <Group.Item>
          <Button
            disabled
            icon={<Icons.Star size="100%" />}
            styleVariant="outlined"
          >
            Outlined
          </Button>
        </Group.Item>
        <Group.Item>
          <Button
            disabled
            icon={<Icons.Star size="100%" />}
            styleVariant="flat"
          >
            Flat
          </Button>
        </Group.Item>
      </Group>
    </div>
  </Surface>
);

export const onPoster = () => (
  <Poster padding="1em">
    <Button icon={<Icons.Star size="100%" />}>Default</Button>
    <Space size="s" />
    <Button colorVariant="danger" icon={<Icons.Star size="100%" />}>
      Default
    </Button>
    <Space size="s" />
    <Button disabled icon={<Icons.Star size="100%" />}>
      Default
    </Button>
  </Poster>
);

export const fullWidth = () => (
  <>
    <Button icon={<Icons.Star size="100%" />} minWidth="100%">
      Default
    </Button>
    <Space size="s" />
    <Button
      icon={<Icons.Star size="100%" />}
      minWidth="100%"
      styleVariant="outlined"
    >
      Outlined
    </Button>
    <Space size="s" />
    <Button
      icon={<Icons.Star size="100%" />}
      minWidth="100%"
      styleVariant="flat"
    >
      Flat
    </Button>
  </>
);

export const knobs = () => {
  const buttonText = text("text", "Button", "Button") || null;
  const Icon =
    Icons[
      select("icon", [""].concat(Object.keys(Icons).sort()), "Star", "Button")
    ];
  const colorVariant =
    select("colorVariant", [""].concat(Button.colorVariants), "", "Button") ||
    null;
  const styleVariant =
    select("styleVariant", [""].concat(Button.styleVariants), "", "Button") ||
    null;
  const minWidth = text("minWidth", "", "Button") || null;
  const isDisabled = boolean("disabled", false, "Button");

  return (
    <Surface
      backgroundColor={select(
        "backgroundColor",
        Surface.backgroundColors,
        "white",
        "Surface",
      )}
    >
      <Button
        colorVariant={colorVariant}
        styleVariant={styleVariant}
        minWidth={minWidth}
        disabled={isDisabled}
        icon={Icon && <Icon size="100%" />}
      >
        {buttonText}
      </Button>
    </Surface>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
