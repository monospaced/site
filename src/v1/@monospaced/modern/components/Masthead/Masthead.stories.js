import { boolean, number, select, text } from "@storybook/addon-knobs";
import React from "react";
import { Route, Router } from "react-router";
import createMemoryHistory from "react-router/lib/createMemoryHistory";

import Heading from "../Heading";
import Logotype from "../Logotype";
import Poster from "../Poster";

import Masthead from "./Masthead";

const history = createMemoryHistory();

const RouterDecorator = story => {
  const route = <Route component={() => story()} path="*" />;

  class RenderRouter extends React.Component {
    render() {
      return <Router history={history}>{route}</Router>;
    }
  }

  return <RenderRouter />;
};

export default {
  component: Masthead,
  decorators: [RouterDecorator],
  title: "Components/Masthead",
};

export const basic = () => (
  <Masthead
    links={[
      {
        href: "https://example.com",
        text: `item-1`,
      },
      {
        href: "https://example.com",
        text: `item-2`,
      },
      {
        href: "https://example.com",
        text: `item-3`,
      },
    ]}
    logo={<Logotype height="1.5em" />}
  />
);

export const onPoster = () => (
  <Poster>
    <Masthead
      links={[
        {
          href: "https://example.com",
          text: `item-1`,
        },
        {
          href: "https://example.com",
          text: `item-2`,
        },
        {
          href: "https://example.com",
          text: `item-3`,
        },
      ]}
      logo={<Logotype height="1.5em" />}
    />
  </Poster>
);

export const knobs = () => {
  const Element = boolean("on Poster", false, "Story") ? Poster : "div";

  const numberOfItems = number(
    "number of links",
    3,
    {
      range: true,
      min: 1,
      max: 5,
    },
    "Story",
  );

  return (
    <Element>
      <Masthead
        headingLevel={
          select("headingLevel", [""].concat(Heading.levels), "", "Masthead") ||
          null
        }
        links={[...Array(numberOfItems).keys()].map(i => ({
          href: text("link href", "https://example.com", "Masthead"),
          text: `${text("link text", "item", "Masthead")}-${i + 1}`,
        }))}
        logo={<Logotype height="1.5em" />}
      />
    </Element>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
