import PropTypes from "prop-types";
import React from "react";

import "./Blockquote.css";

/**
 * Use `Blockquote` to typeset quotations and their attribution.
 */
const Blockquote = ({ children }) => (
  <blockquote className="Blockquote">{children}</blockquote>
);

Blockquote.propTypes = {
  /**
   * Text to display in the Blockquote. Usually an HTML paragraph element
   * containing a quotation. With an optional second paragraph containing
   * its attribution.
   */
  children: PropTypes.node.isRequired,
};

export default Blockquote;
