/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import Group from "..";

describe("Group component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Group>
        <Group.Item>children</Group.Item>
      </Group>,
    );

    expect(container).toMatchSnapshot();
  });
});
