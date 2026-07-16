import PropTypes from "prop-types";
import React from "react";

import { mdrnColor as colors } from "../../tokens/color";

import "./Logomark.css";

/**
 * Use `Logomark` to display the Monospaced brand logomark.
 */
const Logomark = ({
  backgroundColor = null,
  color = "currentColor",
  padding = null,
  secondColor = false,
  title = null,
  width = null,
}) => {
  return (
    <span
      className="Logomark"
      style={{ backgroundColor: colors[backgroundColor], width }}
    >
      <span className="Logomark-inner">
        <svg
          className="Logomark-svg"
          role={title && "img"}
          style={{ padding }}
          viewBox="0 0 2048 2048"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={!title || null}
          aria-label={title}
        >
          <path
            d="M485.378 1921.317h1078.004v126.796H485.378zM1562.641 253.22v1541.238H485.368V253.227H1562.64zm-153.889 1387.632V406.852H1281.94l-258.81 615.277-258.78-615.277H639.257v1234.001h128.51V705.06l3.447-3.385 251.915 604.963 253.665-604.963h3.427v939.178h128.541z"
            fill={colors[color] || "currentColor"}
          />
          {secondColor && (
            <path
              d="M767.766 1640.847h-128.51V406.846H764.35l258.78 615.283 258.8-615.283h126.822v1234h-128.54V701.67h-3.428l-253.655 604.97-251.925-604.97-3.448 3.385v935.793z"
              fill={
                typeof secondColor === "string"
                  ? colors[secondColor]
                  : colors["color-white"]
              }
            />
          )}
        </svg>
      </span>
    </span>
  );
};

Logomark.colors = Object.keys(colors).filter(
  colorKey => !colorKey.includes("-rgb"),
);

Logomark.propTypes = {
  /**
   * Background color of the Logomark.
   */
  backgroundColor: PropTypes.oneOf(Logomark.colors),

  /**
   * Fill color of the Logomark SVG.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf([`currentColor`]),
    PropTypes.oneOf(Logomark.colors),
  ]),

  /**
   * A valid CSS padding value for the Logomark SVG.
   */
  padding: PropTypes.string,

  /**
   * Fill color of the “M” path in the Logomark SVG. A value of true adds a
   * white "M" path.
   */
  secondColor: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Logomark.colors),
  ]),

  /**
   * Title of the Logomark. Can be used to provide an accessible label text.
   */
  title: PropTypes.string,

  /**
   * A valid CSS width value for the Logomark.
   */
  width: PropTypes.string,
};

export default Logomark;
