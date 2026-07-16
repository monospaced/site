import { MDXProvider } from "@mdx-js/react";
import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";

import Surface from "../Surface";

import Code from "./Code";
import MdxMockJsCode from "./__mocks__/code.js.mock.mdx";

export default {
  component: Code,
  title: "Components/Code",
};

export const basic = () => <Code>const foo = 10</Code>;

export const onDarkBackground = () => (
  <Surface backgroundColor="grey-dark">
    <div style={{ padding: "1em" }}>
      <Code>const foo = 10</Code>
    </div>
  </Surface>
);

export const block = () => (
  <pre>
    <Code block>const foo = 10</Code>
  </pre>
);

export const highlighted = () => (
  <MDXProvider components={{ code: Code.Block }}>
    <MdxMockJsCode />
  </MDXProvider>
);

export const blockLightMode = () => (
  <pre>
    <Code block lightMode>
      const foo = 10
    </Code>
  </pre>
);

export const highlightedLightMode = () => (
  <MDXProvider components={{ code: Code.Block.LightMode }}>
    <MdxMockJsCode />
  </MDXProvider>
);
export const knobs = () => {
  const code = text("text", "const foo = 10", "Code");

  return (
    <Surface
      backgroundColor={select(
        "backgroundColor",
        Surface.backgroundColors,
        "white",
        "Surface",
      )}
    >
      <Code
        block={boolean("block", false, "Code")}
        lightMode={boolean("lightMode", false, "Code")}
      >
        {code}
      </Code>
    </Surface>
  );
};

knobs.story = { parameters: { docs: { disable: true } } };
