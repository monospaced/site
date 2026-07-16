import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "./List.css";

/**
 * Use `List` to typset text in lists.
 */
const List = ({ children, ordered = false }) => {
  let Element = "ul";

  if (ordered) {
    Element = "ol";
  }

  return (
    <Element className={classNames({ List: true, [`List--ordered`]: ordered })}>
      {children}
    </Element>
  );
};

List.propTypes = {
  /**
   * HTML list item elements containing text to display in the List.
   */
  children: PropTypes.node.isRequired,

  /**
   * Ordered variant of List.
   */
  ordered: PropTypes.bool,
};

List.Ordered = ({ children }) => <List ordered>{children}</List>;

List.Ordered.displayName = "List.Ordered";

List.Ordered.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
