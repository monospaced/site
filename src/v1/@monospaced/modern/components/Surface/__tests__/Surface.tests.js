/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Surface from "..";

describe("Surface component", () => {
  it("should render correctly", () => {
    const { container } = render(<Surface>children</Surface>);

    expect(container).toMatchSnapshot();
  });

  it("should render dark background correctly", () => {
    const { container } = render(
      <Surface backgroundColor="grey-dark">children</Surface>,
    );

    expect(container).toMatchSnapshot();
  });
});
