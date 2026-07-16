/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Base from "..";

describe("Base component", () => {
  it("should render correctly", () => {
    const { container } = render(<Base>children</Base>);

    expect(container).toMatchSnapshot();
  });
});
