import React from "react";

import Grid from "../../components/Grid";
import Heading from "../../components/Heading";
import Space from "../../components/Space";

import { colorTokens, mdrnColor } from "./";

const defaultColors = {
  "color-grey": mdrnColor["color-grey-4"],
  "color-red": mdrnColor["color-red-5"],
  "color-pink": mdrnColor["color-pink-6"],
  "color-blue": mdrnColor["color-blue-6"],
  "color-azure": mdrnColor["color-azure-4"],
  "color-cyan": mdrnColor["color-cyan-3"],
  "color-green": mdrnColor["color-green-3"],
  "color-yellow": mdrnColor["color-yellow-3"],
  "color-orange": mdrnColor["color-orange-4"],
};

const colors = Object.assign({}, mdrnColor, defaultColors, colorTokens);

const colorKeys = Object.keys(colors).filter(
  colorKey => !colorKey.includes("-rgb"),
);

const ColorStory = () => {
  const getSwatch = colorKey => {
    const backgroundColor = colors[colorKey];
    const colorRampIndex = parseInt(
      colorKeys.find(key => colors[key] === backgroundColor).slice(-1),
    );
    const colorRampLength = 9;
    const color =
      colorRampIndex > Math.ceil(colorRampLength / 2)
        ? colors["color-white"]
        : colorTokens["color-grey-9"];
    const swatch = (
      <div
        className="u-monospaced"
        key={colorKey}
        style={{ backgroundColor, color, padding: "0.5em 1em" }}
      >
        <div>{colorKey.replace(/-/g, " ").replace("color", "")}</div>
        <small>{backgroundColor}</small>
      </div>
    );

    return swatch;
  };

  return (
    <>
      <Heading size="xxxl">Color</Heading>
      <Space size="m" />
      <Grid padding="0">
        {Object.keys(defaultColors).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Grey</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(2, 11).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Red</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(11, 20).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Pink</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(20, 29).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Blue</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(29, 38).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Azure</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(38, 47).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Cyan</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(47, 56).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Green</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(56, 65).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Yellow</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(65, 74).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxl">Orange</Heading>
      <Space size="s" />
      <Grid padding="0">
        {colorKeys.slice(74, 83).map(colorKey => (
          <Grid.Item colSpan="4" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Heading size="xxxl">Tokens</Heading>
      <Space />
      <Grid padding="0">
        {Object.keys(colorTokens)
          .slice(0, 3)
          .map(colorKey => (
            <Grid.Item colSpan="4" key={colorKey}>
              {getSwatch(colorKey)}
            </Grid.Item>
          ))}
        {Object.keys(colorTokens)
          .slice(3)
          .map(colorKey => (
            <Grid.Item colSpan="3" key={colorKey}>
              {getSwatch(colorKey)}
            </Grid.Item>
          ))}
      </Grid>
      <Space />
    </>
  );
};

export default ColorStory;
