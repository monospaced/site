import React from "react";

import Blockquote from "../Blockquote";
import Code from "../Code";
import Heading from "../Heading";
import List from "../List";
import Paragraph from "../Paragraph";
import Rule from "../Rule";
import Table from "../Table";

const Pre = props => <pre {...props} />;

const mdxComponents = {
  blockquote: Blockquote,
  code: Code.Block,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  hr: Rule,
  inlineCode: Code,
  ol: List.Ordered,
  p: Paragraph,
  pre: Pre,
  table: Table,
  ul: List,
};

export { default } from "./Markdown";
export { mdxComponents };
