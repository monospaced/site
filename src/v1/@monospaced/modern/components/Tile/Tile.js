import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext } from "react";

import { SurfaceContext } from "../Surface";

import "./Tile.css";

/**
 * Use `Tile` to display content in a block link.
 */
const Tile = ({ children, href, label, width }) => {
  const surfaceBackground = useContext(SurfaceContext);

  return (
    <a
      aria-label={label}
      className={classNames({
        Tile: true,
        [`Tile--onDarkBackground`]: surfaceBackground === "dark",
      })}
      href={href}
      style={{ width }}
    >
      {children}
    </a>
  );
};

Tile.propTypes = {
  /**
   * Content to display in the Tile, usually an SVG component.
   */
  children: PropTypes.node.isRequired,

  /**
   * HTML href attribute of the Tile link.
   */
  href: PropTypes.string.isRequired,

  /**
   * Accessible label text for the Tile link.
   */
  label: PropTypes.string,

  /**
   * Valid CSS width value for the Tile.
   */
  width: PropTypes.string,
};

export default Tile;
