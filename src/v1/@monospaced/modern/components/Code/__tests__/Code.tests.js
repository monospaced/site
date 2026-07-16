/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Code from "..";

describe("Code component", () => {
  it("should render correctly", () => {
    const { container } = render(<Code>children</Code>);

    expect(container).toMatchSnapshot();
  });

  it("should render a code block correctly", () => {
    const { container } = render(<Code.Block>children</Code.Block>);

    expect(container).toMatchSnapshot();
  });

  it("should render a code block correctly in light mode", () => {
    const { container } = render(
      <Code.Block.LightMode>children</Code.Block.LightMode>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render a code language correctly", () => {
    const { container } = render(
      <Code.Block className="language-js">children</Code.Block>,
    );

    expect(container).toMatchSnapshot();
  });
});
