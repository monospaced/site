/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Footer from "..";

describe("Footer component", () => {
  let globalDate;

  beforeAll(() => {
    globalDate = global.Date;

    global.Date = () => {
      return {
        getFullYear: () => "2018",
      };
    };
    global.Date.now = jest.fn(() => {});
  });

  afterAll(() => (global.Date = globalDate));

  it("should render correctly", () => {
    const { container } = render(<Footer copyright="copyright" />);

    expect(container).toMatchSnapshot();
  });

  it("should render links correctly", () => {
    const { container } = render(
      <Footer
        copyright="copyright"
        links={[
          {
            href: "href",
            routerLink: true,
            text: "foo",
          },
          {
            href: "href",
            text: "bar",
          },
        ]}
        routes={[{ path: "foo" }]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
