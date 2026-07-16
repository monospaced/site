/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Tile from "..";

describe("Tile component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Tile href="http://example.com">children</Tile>,
    );

    expect(container).toMatchSnapshot();
  });
});
