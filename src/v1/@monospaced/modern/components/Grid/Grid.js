import PropTypes from "prop-types";
import React from "react";

import "./Grid.css";

/**
 * Use `Grid` to layout content in a 12-column grid.
 */
const Grid = ({ children, padding = "0 1em" }) => (
  <div className="Grid" style={{ padding }}>
    {children}
  </div>
);

const alignments = ["center", "end", "start"];

Grid.alignments = alignments;

Grid.propTypes = {
  /**
   * Grid.Item components to display in the Grid.
   */
  children: PropTypes.node.isRequired,

  /**
   * A valid CSS padding value for the Grid.
   */
  padding: PropTypes.string,
};

const Item = ({
  align,
  children,
  colSpan,
  colStart,
  justify,
  rowSpan,
  rowStart,
}) => (
  <div
    className="Grid-item"
    style={{
      alignSelf: align,
      gridColumnEnd: colSpan && `span ${colSpan}`,
      gridColumnStart: colStart,
      gridRowEnd: rowSpan && `span ${rowSpan}`,
      gridRowStart: rowStart,
      justifySelf: justify,
    }}
  >
    {children}
  </div>
);

Item.displayName = "Grid.Item";

Item.propTypes = {
  /**
   * Vertical alignment of the Grid.Item.
   */
  align: PropTypes.oneOf(alignments),

  /**
   * Content to display in the Grid.Item.
   */
  children: PropTypes.node,

  /**
   * Number of columns the Grid.Item should span.
   */
  colSpan: PropTypes.string,

  /**
   * Column number the Grid.Item should start at.
   */
  colStart: PropTypes.string,

  /**
   * Horizontal alignment of the Grid.Item.
   */
  justify: PropTypes.oneOf(alignments),

  /**
   * Number of rows the Grid.Item should span.
   */
  rowSpan: PropTypes.string,

  /**
   * Row number the Grid.Item should start at.
   */
  rowStart: PropTypes.string,
};

Grid.Item = Item;

export { Item };
export default Grid;
