import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { SurfaceContext } from "../Surface";

import "./Code.css";

/**
 * Use `Code` to display code samples. As inline text, or code blocks with
 * optional syntax highlighting.
 */
const Code = ({ block = false, children, lightMode = false }) => {
  const surfaceBackground = useContext(SurfaceContext);

  return (
    <code
      className={classNames({
        Code: true,
        [`Code--block`]: block,
        [`Code--lightMode`]: lightMode,
        [`Code--onDarkBackground`]: surfaceBackground === "dark",
      })}
    >
      {children}
    </code>
  );
};

Code.propTypes = {
  /**
   * Block variant of Code.
   */
  block: PropTypes.bool,

  /**
   * Content to display in Code. Either preformatted text, or syntax-highlighted
   * markup in highlight.js format. MDX code language blocks rendered by
   * Code.Block will be syntax-highlighted automatically.
   */
  children: PropTypes.node.isRequired,

  /**
   * Light variant of Code. Only applies if block is true.
   */
  lightMode: PropTypes.bool,
};

Code.Block = ({ children, className, lightMode }) => (
  <Code block lightMode={lightMode}>
    <HighlightedChildren language={className}>{children}</HighlightedChildren>
  </Code>
);

Code.Block.displayName = "Code.Block";

Code.Block.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lightMode: PropTypes.bool,
};

/* eslint-disable react/display-name, react/prop-types */

Code.Block.LightMode = ({ children, className }) => (
  <Code block lightMode>
    <HighlightedChildren language={className}>{children}</HighlightedChildren>
  </Code>
);

Code.Block.LightMode.displayName = "Code.Block.LightMode";

Code.Block.LightMode.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/* eslint-enable */

const HighlightedChildren = ({ children, language }) => (
  <SyntaxHighlighter
    CodeTag="span"
    language={language ? `${language.replace(/language-/, "")}` : "text"}
    PreTag="span"
    useInlineStyles={false}
  >
    {children}
  </SyntaxHighlighter>
);

HighlightedChildren.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

export default Code;
