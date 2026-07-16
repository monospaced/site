/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";
import { createMemoryHistory, Router } from "react-router";
import reactRouterToArray from "react-router-to-array";

import routes, { App } from "..";
import { HelmetProvider } from "react-helmet-async";

jest.mock("../content");

describe("Routes", () => {
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

  it("should render App correctly", () => {
    const { container } = render(
      <App
        route={{
          content: {
            footer: { links: [] },
            meta: { title: "foo" },
          },
        }}
        routes={[]}
      >
        <div />
      </App>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should convert correctly to an array", () => {
    const container = reactRouterToArray(routes);

    expect(container).toMatchInlineSnapshot(`
      Array [
        "/v1",
        "/v1/blog",
        "/v1/slug",
        "/v1/legal",
        "/v1/404",
      ]
    `);
  });

  it("should force trailing slashes on urls", () => {
    const history = createMemoryHistory("/v1/foo");
    render(
      <HelmetProvider>
        <Router history={history} routes={routes} />
      </HelmetProvider>,
    );

    expect(history.getCurrentLocation().pathname).toBe("/v1/foo/");

    history.push("/v1/bar");

    expect(history.getCurrentLocation().pathname).toBe("/v1/bar/");
  });
});
