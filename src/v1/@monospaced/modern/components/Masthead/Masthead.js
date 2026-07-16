import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Mail, Menu, X } from "react-feather";
import { Link } from "react-router";

import { ARCHIVE_HOME_PATH } from "../../../../sitePaths";
import Button from "../Button";
import Heading from "../Heading";
import { PosterContext } from "../Poster";

import "./Masthead.css";

/**
 * Use `Masthead` to display a logo and navigation links at the top of a page.
 */
const Masthead = ({
  activePath = null,
  headingLevel = null,
  links = null,
  logo,
}) => {
  const poster = useContext(PosterContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mdrn-is-overlayed");
    } else {
      document.body.classList.remove("mdrn-is-overlayed");
    }
  }, [menuOpen]);

  return (
    <div
      className={classNames({
        Masthead: true,
        [`Masthead--menuOpen`]: menuOpen,
        [`Masthead--onPoster`]: poster,
      })}
    >
      <Heading level={headingLevel}>
        <Link
          className="Masthead-logo"
          onClick={() => {
            setMenuOpen(false);
          }}
          to={ARCHIVE_HOME_PATH}
        >
          {logo}
        </Link>
      </Heading>
      <div className="Masthead-menu">
        <div className="Masthead-menuButton">
          {links &&
            (links.length > 1 ? (
              <Button
                icon={
                  menuOpen ? (
                    <X aria-label="Close" role="img" size="100%" />
                  ) : (
                    <Menu aria-label="Menu" role="img" size="100%" />
                  )
                }
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                styleVariant="flat"
              />
            ) : (
              <a href={links[0].href}>
                <Button
                  icon={<Mail aria-label="Email" role="img" size="100%" />}
                  styleVariant="flat"
                />
              </a>
            ))}
        </div>
        {links && (
          <nav className="Masthead-nav">
            <ul className="Masthead-navList">
              {links.map(link => {
                const { href, routerLink, text } = link;

                return (
                  <li className="Masthead-navItem" key={text}>
                    {routerLink ? (
                      <Link
                        className={classNames({
                          [`Masthead-navLink`]: true,
                          [`Masthead-navLinkActive`]: href === activePath,
                        })}
                        to={href}
                      >
                        {text}
                      </Link>
                    ) : (
                      <a className="Masthead-navLink" href={href}>
                        {text}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

Masthead.propTypes = {
  /**
   * Path of the current URL.
   */
  activePath: PropTypes.string,

  /**
   * HTML section heading level for the Masthead logo. If not provided will
   * render in a span.
   */
  headingLevel: PropTypes.oneOf(Heading.levels),

  /**
   * Navigation links to display in the Masthead.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      routerLink: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }),
  ),

  /**
   * Logo to display in the Masthead, usually a Logotype component.
   */
  logo: PropTypes.element.isRequired,
};

export default Masthead;
