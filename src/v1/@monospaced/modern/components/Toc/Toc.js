import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router";

import "./Toc.css";

/**
 * Use `Toc` to display lists of links in a Table of Contents format.
 */
const Toc = ({ children }) => <ol className="Toc">{children}</ol>;

Toc.propTypes = {
  /**
   * Toc.Item components to display in the Toc.
   */
  children: PropTypes.node.isRequired,
};

Toc.Item = ({ date, slug, title }) => {
  const LinkElement = slug ? Link : "a";

  return (
    <li className="Toc-item">
      <LinkElement
        className="Toc-itemLink"
        href={slug ? undefined : "#"}
        to={slug && `/${slug}/`}
      >
        <span className="Toc-itemTitle">{title}</span>
        {date && <span className="Toc-itemDate">{date}</span>}
      </LinkElement>
    </li>
  );
};

Toc.Item.displayName = "Toc.Item";

Toc.Item.propTypes = {
  date: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Toc;
