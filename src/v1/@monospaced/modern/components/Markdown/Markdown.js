import PropTypes from "prop-types";
import React from "react";

import "./Markdown.css";

/**
 * Use `Markdown` as a layout wrapper for Mdx documents.
 */
const Markdown = ({ children }) => <div className="Markdown">{children}</div>;

Markdown.propTypes = { children: PropTypes.node.isRequired };

export default Markdown;
