import classNames from "classnames";
import PropTypes from "prop-types";
import React, { createContext } from "react";

import tokens from "../../tokens";

import "./Surface.css";

const backgroundColors = {
  white: tokens["color-white"],
  "grey-light": tokens["color-grey-1"],
  "grey-dark": tokens["color-grey-9"],
  black: tokens["color-black"],
};

const Context = createContext("white");

const { Provider } = Context;

/**
 * Use `Surface` to display components on different background colors.
 */
const Surface = ({ backgroundColor = "white", children }) => {
  const surfaceBackground =
    backgroundColor.endsWith("dark") || backgroundColor.endsWith("black")
      ? "dark"
      : backgroundColor.replace("color-", "");

  return (
    <Provider value={surfaceBackground}>
      <div
        className={classNames({
          Surface: true,
          [`Surface--backgroundDark`]: surfaceBackground === "dark",
        })}
        style={{
          backgroundColor: backgroundColors[backgroundColor],
        }}
      >
        {children}
      </div>
    </Provider>
  );
};

const colorKeys = Object.keys(backgroundColors);

Surface.backgroundColors = colorKeys;

Surface.propTypes = {
  /**
   * Surface color variant.
   */
  backgroundColor: PropTypes.oneOf(colorKeys),

  /**
   * Content to display on the Surface.
   */
  children: PropTypes.node.isRequired,
};

export { Context as SurfaceContext };
export default Surface;
