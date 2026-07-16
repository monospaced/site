import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router";

import { ARCHIVE_BASE_PATH } from "../../../../sitePaths";
import "./Footer.css";

/**
 * Use `Footer` to display copyright and supplemental links at the bottom of
 * a page.
 */
const Footer = ({ copyright, links = null, routes = null }) => {
  const path =
    routes && routes[routes.length - 1] && routes[routes.length - 1].path;
  const normalizeRoutePath = routePath =>
    routePath.replace(ARCHIVE_BASE_PATH, "").replace(/\//g, "");

  return (
    <div className="Footer">
      <div className="Footer-copyright">
        © {copyright} 2022 {/* new Date().getFullYear() */}
      </div>
      {links && (
        <ul className="Footer-list">
          {links.map(link => {
            const { href, routerLink, text } = link;

            return (
              <li className="Footer-listItem" key={text}>
                {routerLink ? (
                  <Link
                    className={classNames({
                      [`Footer-link`]: true,
                      [`Footer-linkActive`]: normalizeRoutePath(href) === path,
                    })}
                    to={href}
                  >
                    {text}
                  </Link>
                ) : (
                  <a className="Footer-link" href={href}>
                    {text}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Footer.propTypes = {
  /**
   * Text to display in the Footer copyright declaration. The component provides
   * the copyright symbol and current year.
   */
  copyright: PropTypes.string.isRequired,

  /**
   * Supplemental links to display in the Footer.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      routerLink: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }),
  ),

  /**
   * React Router routes array, from which the Footer can extract the
   * current path.
   */
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
    }),
  ),
};

export default Footer;
