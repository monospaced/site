import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters, configure } from "@storybook/react";

import Modern, { mdxComponents } from "../src/v1/@monospaced/modern";

import theme from "./theme";

const styles = story => <Modern>{story()}</Modern>;

addParameters({
  docs: { components: mdxComponents },
  options: {
    sidebarAnimations: false,
    storySort: (a, b) => {
      const aId = a[1].id;
      const bId = b[1].id;
      if (
        (aId.includes("components") && bId.includes("page")) ||
        (aId === "iconography--page" &&
          (bId === "color--page" || bId === "introduction--page"))
      ) {
        return 1;
      }
      return -1;
    },
    theme,
  },
});

addDecorator(styles);
addDecorator(withKnobs);
configure(
  [
    require.context(
      "../src/v1/@monospaced/modern",
      true,
      /\.stories\.(js|mdx)$/,
    ),
  ],
  module,
);
