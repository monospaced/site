/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Block from "..";

describe("Block component", () => {
  it("should render correctly", () => {
    const { container } = render(<Block>children</Block>);

    expect(container).toMatchSnapshot();
  });
});
