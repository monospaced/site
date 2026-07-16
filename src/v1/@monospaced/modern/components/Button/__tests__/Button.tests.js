/* eslint-env jest */
import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Button from "..";

describe("Button container", () => {
  it("should render correctly", () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const { container } = render(<Button>children</Button>);

    expect(container).toMatchSnapshot();
  });

  it("should render an icon correctly", () => {
    const { container } = render(<Button icon={<div />}>children</Button>);

    expect(container).toMatchSnapshot();
  });

  it("should render an icon and no children correctly", () => {
    const { container } = render(<Button icon={<div />} />);

    expect(container).toMatchSnapshot();
  });

  it("should handle default onClick function correctly", () => {
    const { container, getByText } = render(<Button>Button</Button>);

    fireEvent.click(getByText("Button"));

    expect(container).toMatchSnapshot();
  });

  it("should call onClick function correctly", () => {
    const mockFunction = jest.fn();

    const { getByText } = render(
      <Button onClick={mockFunction}>Button</Button>,
    );

    expect(mockFunction).not.toHaveBeenCalled();

    fireEvent.click(getByText("Button"));

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
