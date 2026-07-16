/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

import content from "../../../../content/__mocks__";

import Post from "..";

describe("Post component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <HelmetProvider>
        <Post content={content} route={{ path: "slug" }} />
      </HelmetProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
