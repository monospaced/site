/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Grid from "..";

describe("Grid component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item>children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render alignment correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item align="center">children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render colSpan correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item colSpan="2">children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render colStart correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item colStart="2">children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render justification correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item justify="center">children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render rowSpan correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item rowSpan="2">children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render rowStart correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Item rowStart="2">children</Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });
});
