/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Markdown, { mdxComponents } from "..";

describe("Markdown component", () => {
  it("should render correctly", () => {
    const { container } = render(<Markdown>children</Markdown>);

    expect(container).toMatchSnapshot();
  });

  it("should render pre component correctly", () => {
    const Pre = mdxComponents.pre;
    const { container } = render(<Pre>children</Pre>);

    expect(container).toMatchSnapshot();
  });
});
