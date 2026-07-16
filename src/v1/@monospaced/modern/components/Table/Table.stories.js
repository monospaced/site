import { select } from "@storybook/addon-knobs";
import React from "react";

import Surface from "../Surface";

import Table from "./Table";

export default {
  component: Table,
  title: "Components/Table",
};

export const basic = () => (
  <Table>
    <thead>
      <tr>
        <th align="left">Tables</th>
        <th align="center">Are</th>
        <th align="right">Cool</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="left">col 2 is</td>
        <td align="center">centre-aligned</td>
        <td align="right">£12</td>
      </tr>
      <tr>
        <td align="left">col 3 is</td>
        <td align="center">right-aligned</td>
        <td align="right">£1600</td>
      </tr>
      <tr>
        <td align="left">zebra stripes</td>
        <td align="center">are neat</td>
        <td align="right">£1</td>
      </tr>
    </tbody>
  </Table>
);

export const onDarkBackground = () => (
  <Surface backgroundColor="grey-dark">
    <div style={{ padding: "1em" }}>
      <Table>
        <thead>
          <tr>
            <th align="left">Tables</th>
            <th align="center">Are</th>
            <th align="right">Cool</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">col 2 is</td>
            <td align="center">centre-aligned</td>
            <td align="right">£12</td>
          </tr>
          <tr>
            <td align="left">col 3 is</td>
            <td align="center">right-aligned</td>
            <td align="right">£1600</td>
          </tr>
          <tr>
            <td align="left">zebra stripes</td>
            <td align="center">are neat</td>
            <td align="right">£1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </Surface>
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
    <Table>
      <thead>
        <tr>
          <th align="left">Tables</th>
          <th align="center">Are</th>
          <th align="right">Cool</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left">col 2 is</td>
          <td align="center">centre-aligned</td>
          <td align="right">£12</td>
        </tr>
        <tr>
          <td align="left">col 3 is</td>
          <td align="center">right-aligned</td>
          <td align="right">£1600</td>
        </tr>
        <tr>
          <td align="left">zebra stripes</td>
          <td align="center">are neat</td>
          <td align="right">£1</td>
        </tr>
      </tbody>
    </Table>
  </Surface>
);

knobs.story = { parameters: { docs: { disable: true } } };
