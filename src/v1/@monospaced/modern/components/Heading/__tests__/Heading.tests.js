/* eslint-env jest */
import { render } from "@testing-library/react";

import {
  basic,
  color,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  level,
} from "../Heading.stories";

describe("Heading component", () => {
  it("should render correctly", () => {
    const { container } = render(basic());

    expect(container).toMatchSnapshot();
  });

  it("should render heading color correctly", () => {
    const { container } = render(color());

    expect(container).toMatchSnapshot();
  });

  it("should render heading level correctly", () => {
    const { container } = render(level());

    expect(container).toMatchSnapshot();
  });

  it("should render an H1 correctly", () => {
    const { container } = render(h1());

    expect(container).toMatchSnapshot();
  });

  it("should render an H2 correctly", () => {
    const { container } = render(h2());

    expect(container).toMatchSnapshot();
  });

  it("should render an H3 correctly", () => {
    const { container } = render(h3());

    expect(container).toMatchSnapshot();
  });

  it("should render an H4 correctly", () => {
    const { container } = render(h4());

    expect(container).toMatchSnapshot();
  });

  it("should render an H5 correctly", () => {
    const { container } = render(h5());

    expect(container).toMatchSnapshot();
  });

  it("should render an H6 correctly", () => {
    const { container } = render(h6());

    expect(container).toMatchSnapshot();
  });
});
