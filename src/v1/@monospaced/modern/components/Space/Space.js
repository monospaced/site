import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "./Space.css";

/**
 * Use `Space` to create vertical space between components.
 */
const Space = ({ size = "m" }) => (
  <div
    className={classNames({
      Space: true,
      [`Space--l`]: size === "l",
      [`Space--s`]: size === "s",
      [`Space--xl`]: size === "xl",
    })}
  />
);

const sizes = ["s", "m", "l", "xl"];

Space.sizes = sizes;

Space.propTypes = {
  /**
   *  Size of the Space.
   */
  size: PropTypes.oneOf(sizes),
};

export default Space;
