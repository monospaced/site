/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Blockquote from "..";

describe("Blockquote component", () => {
  it("should render correctly", () => {
    const { container } = render(<Blockquote>children</Blockquote>);

    expect(container).toMatchSnapshot();
  });
});
