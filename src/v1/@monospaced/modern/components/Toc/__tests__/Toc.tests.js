/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Toc from "..";

describe("Toc component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Toc>
        <Toc.Item title="title" />
      </Toc>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render date correctly", () => {
    const { container } = render(
      <Toc>
        <Toc.Item date="2018-11-15" title="title" />
      </Toc>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render slug correctly", () => {
    const { container } = render(
      <Toc>
        <Toc.Item slug="path" title="title" />
      </Toc>,
    );

    expect(container).toMatchSnapshot();
  });
});
