/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Logotype from "..";

describe("Logotype component", () => {
  it("should render correctly", () => {
    const { container } = render(<Logotype />);

    expect(container).toMatchSnapshot();
  });

  it("should render width correctly", () => {
    const { container } = render(<Logotype width="6rem" />);

    expect(container).toMatchSnapshot();
  });

  it("should render height correctly", () => {
    const { container } = render(<Logotype height="3rem" />);

    expect(container).toMatchSnapshot();
  });
});
