import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext } from "react";

import { PosterContext } from "../Poster";
import { SurfaceContext } from "../Surface";

import "./Button.css";

/**
 * Use `Button` to allow users to take actions with clicks and taps.
 */
const Button = ({
  children = null,
  colorVariant = null,
  disabled = null,
  icon = null,
  minWidth = null,
  onClick = () => {},
  styleVariant = null,
}) => {
  const poster = useContext(PosterContext);
  const surfaceBackground = useContext(SurfaceContext);

  return (
    <button
      className={classNames({
        Button: true,
        [`Button--colorDanger`]: colorVariant === "danger",
        [`Button--styleFlat`]: styleVariant === "flat",
        [`Button--styleOutlined`]: styleVariant === "outlined",
        [`Button--withIcon`]: icon,
        [`Button--iconOnly`]: icon && !children,
        [`Button--onDarkBackground`]: surfaceBackground === "dark",
        [`Button--onPoster`]: poster,
      })}
      disabled={disabled}
      onClick={(...args) => {
        onClick(...args);
      }}
      style={{ minWidth }}
    >
      {icon && <span className="Button-icon">{icon}</span>}
      {children && <span className="Button-text">{children}</span>}
    </button>
  );
};

const colorVariants = ["danger"];
const styleVariants = ["flat", "outlined"];

Button.colorVariants = colorVariants;
Button.styleVariants = styleVariants;

Button.propTypes = {
  /**
   * Text to display in the Button.
   */
  children: PropTypes.string,

  /**
   * Semantic Button color variants.
   */
  colorVariant: PropTypes.oneOf(colorVariants),

  /**
   * Is the Button disabled?
   */
  disabled: PropTypes.bool,

  /**
   * Icon to display in the Button. Usually a react-feather Icon component with
   * size prop value of 100%.
   */
  icon: PropTypes.element,

  /**
   * A valid CSS min-width value for the Button.
   */
  minWidth: PropTypes.string,

  /**
   * Callback when the Button is activated.
   */
  onClick: PropTypes.func,

  /**
   * Visual Button style variants.
   */
  styleVariant: PropTypes.oneOf(styleVariants),
};

export default Button;
