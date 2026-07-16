/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Poster from "..";

describe("Poster component", () => {
  it("should render correctly", () => {
    const { container } = render(<Poster />);

    expect(container).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const { container } = render(<Poster>children</Poster>);

    expect(container).toMatchSnapshot();
  });

  it("should render padding correctly", () => {
    const { container } = render(<Poster padding="1em">children</Poster>);

    expect(container).toMatchSnapshot();
  });
});
