import { text } from "@storybook/addon-knobs";
import React from "react";

import Blockquote from "./Blockquote";

export default {
  component: Blockquote,
  title: "Components/Blockquote",
};

export const basic = () => (
  <Blockquote>
    <p>
      One more attribute the modern typographer must have: the capacity for
      taking great pains with seemingly unimportant detail. To him, one
      typographical point must be as important as one inch, and he must harden
      his heart against the accusation of being too fussy.
    </p>
    <p>— Hans P. Schmoller, in ‘Book Design Today’, Spring 1951</p>
  </Blockquote>
);

export const knobs = () => {
  const quote = text(
    "quote",
    `One more attribute the modern typographer must have: the capacity for taking great pains with seemingly unimportant detail. To him, one typographical point must be as important as one inch, and he must harden his heart against the accusation of being too fussy.`,
  );
  const source = text(
    "source",
    "— Hans P. Schmoller, in ‘Book Design Today’, Spring 1951",
  );

  return (
    <Blockquote>
      {quote && <p>{quote}</p>}
      {quote && source && <p>{source}</p>}
    </Blockquote>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
