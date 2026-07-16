/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Table from "..";

describe("Table component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Table>
        <tbody />
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });
});
