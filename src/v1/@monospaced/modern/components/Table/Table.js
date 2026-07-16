import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext } from "react";

import { SurfaceContext } from "../Surface";

import "./Table.css";

/**
 * Use `Table` to display tabular data.
 */
const Table = ({ children }) => {
  const surfaceBackground = useContext(SurfaceContext);

  return (
    <table
      className={classNames({
        Table: true,
        [`Table--onDarkBackground`]: surfaceBackground === "dark",
      })}
    >
      {children}
    </table>
  );
};

Table.propTypes = {
  /**
   * Permitted HTML table content to display in the Table.
   */
  children: PropTypes.node.isRequired,
};

export default Table;
