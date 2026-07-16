/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Rule from "..";

describe("Rule component", () => {
  it("should render correctly", () => {
    const { container } = render(<Rule />);

    expect(container).toMatchSnapshot();
  });
});
