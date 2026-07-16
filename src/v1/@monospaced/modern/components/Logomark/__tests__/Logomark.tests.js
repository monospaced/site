/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Logomark from "..";

describe("Logomark component", () => {
  it("should render correctly", () => {
    const { container } = render(<Logomark />);

    expect(container).toMatchSnapshot();
  });

  it("should render a title correctly", () => {
    const { container } = render(<Logomark title="Title" />);

    expect(container).toMatchSnapshot();
  });

  it("should render a second color correctly", () => {
    const { container } = render(<Logomark secondColor={"color-azure-4"} />);

    expect(container).toMatchSnapshot();
  });

  it("should render white as the default second color", () => {
    const { container } = render(<Logomark secondColor />);

    expect(container).toMatchSnapshot();
  });
});
