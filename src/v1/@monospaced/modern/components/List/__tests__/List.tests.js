/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import List from "..";

describe("List component", () => {
  it("should render correctly", () => {
    const { container } = render(<List>children</List>);

    expect(container).toMatchSnapshot();
  });

  it("should render an ordered list correctly", () => {
    const { container } = render(<List.Ordered>children</List.Ordered>);

    expect(container).toMatchSnapshot();
  });
});
