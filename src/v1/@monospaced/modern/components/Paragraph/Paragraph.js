import PropTypes from "prop-types";
import React from "react";

import "./Paragraph.css";

/**
 * Use `Paragraph` to typeset text in paragraphs.
 */
const Paragraph = ({ children }) => <p className="Paragraph">{children}</p>;

Paragraph.propTypes = {
  /**
   * Text to display in the Paragraph
   */
  children: PropTypes.node.isRequired,
};

export default Paragraph;
