/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Space from "..";

describe("Space component", () => {
  it("should render correctly", () => {
    const { container } = render(<Space>children</Space>);

    expect(container).toMatchSnapshot();
  });
});
