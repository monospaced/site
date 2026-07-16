/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Paragraph from "..";

describe("Paragraph component", () => {
  it("should render correctly", () => {
    const { container } = render(<Paragraph>children</Paragraph>);

    expect(container).toMatchSnapshot();
  });
});
