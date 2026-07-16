import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { colorTokens } from "../../tokens/color";

import "./Heading.css";

/**
 * Use `Heading` to display heading text.
 */
const Heading = ({ children, color = null, level = null, size = null }) => {
  let Element = "span";

  if (Heading.levels.includes(level)) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={classNames({ Heading: true, [`Heading--${size}`]: size })}
      style={{ color: color && colorTokens[color] }}
    >
      {children}
    </Element>
  );
};

const colors = ["color-brand-primary-dark"];
const levels = ["1", "2", "3", "4", "5", "6"];
const sizes = ["s", "m", "l", "xl", "xxl", "xxxl"];

Heading.colors = colors;
Heading.levels = levels;
Heading.sizes = sizes;

Heading.propTypes = {
  /**
   * Text to display in the Heading.
   */
  children: PropTypes.node.isRequired,

  /**
   * Heading color variants.
   */
  color: PropTypes.oneOf(colors),

  /**
   * HTML section heading level. If not provided, the Heading will render as
   * a span.
   */
  level: PropTypes.oneOf(levels),

  /**
   * Typographic size of the Heading.
   */
  size: PropTypes.oneOf(sizes),
};

Heading.H1 = ({ children }) => (
  <Heading level="1" size="xxxl">
    {children}
  </Heading>
);

Heading.H1.displayName = "Heading.H1";

Heading.H1.propTypes = { children: PropTypes.node.isRequired };

Heading.H2 = ({ children }) => (
  <Heading level="2" size="xxl">
    {children}
  </Heading>
);

Heading.H2.displayName = "Heading.H2";

Heading.H2.propTypes = { children: PropTypes.node.isRequired };

Heading.H3 = ({ children }) => (
  <Heading level="3" size="xl">
    {children}
  </Heading>
);

Heading.H3.displayName = "Heading.H3";

Heading.H3.propTypes = { children: PropTypes.node.isRequired };

Heading.H4 = ({ children }) => (
  <Heading level="4" size="l">
    {children}
  </Heading>
);

Heading.H4.displayName = "Heading.H4";

Heading.H4.propTypes = { children: PropTypes.node.isRequired };

Heading.H5 = ({ children }) => (
  <Heading level="5" size="m">
    {children}
  </Heading>
);

Heading.H5.displayName = "Heading.H5";

Heading.H5.propTypes = { children: PropTypes.node.isRequired };

Heading.H6 = ({ children }) => (
  <Heading level="6" size="s">
    {children}
  </Heading>
);

Heading.H6.displayName = "Heading.H6";

Heading.H6.propTypes = { children: PropTypes.node.isRequired };

export default Heading;
