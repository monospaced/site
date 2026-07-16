/* eslint-env jest */
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { createMemoryHistory, Router, Route } from "react-router";

import Masthead from "..";

describe("Masthead component", () => {
  it("should render correctly", () => {
    const { container } = render(<Masthead logo={<div />} />);

    expect(container).toMatchSnapshot();
  });

  it("should render heading level correctly", () => {
    const { container } = render(<Masthead headingLevel="1" logo={<div />} />);

    expect(container).toMatchSnapshot();
  });

  it("should render single link correctly", () => {
    const { container } = render(
      <Masthead
        links={[
          {
            href: "href",
            text: "text",
          },
        ]}
        logo={<div />}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render links correctly", () => {
    const { container } = render(
      <Masthead
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
        logo={<div />}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render open menu correctly", () => {
    const { container, getByLabelText } = render(
      <Masthead
        links={[
          {
            href: "href",
            text: "foo",
          },
          {
            href: "href",
            text: "bar",
          },
        ]}
        logo={<div />}
      />,
    );

    fireEvent.click(getByLabelText("Menu"));

    expect(container).toMatchSnapshot();
  });

  it("should render closed menu correctly", () => {
    const MockPage = () => (
      <Masthead
        links={[
          {
            href: "href",
            text: "foo",
          },
          {
            href: "href",
            text: "bar",
          },
        ]}
        logo={<div aria-label="Logo" />}
      />
    );
    const { container, getByLabelText } = render(
      <Router history={createMemoryHistory()}>
        <Route path="/" component={MockPage} />
      </Router>,
    );

    fireEvent.click(getByLabelText("Menu"));

    expect(getByLabelText("Close")).toBeTruthy();

    fireEvent.click(getByLabelText("Logo"));

    expect(container).toMatchSnapshot();
  });
});
