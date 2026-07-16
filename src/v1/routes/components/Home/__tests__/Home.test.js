/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

import content from "../../../content/__mocks__";

import Home from "..";

describe("Home component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <HelmetProvider>
        <Home content={content} />
      </HelmetProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
