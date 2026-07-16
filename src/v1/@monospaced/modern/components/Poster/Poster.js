import PropTypes from "prop-types";
import React, { createContext } from "react";

import "./Poster.css";

const Context = createContext(false);

const { Provider } = Context;

/**
 * Use `Poster` to display content on an image.
 */
const Poster = ({ children = null, padding = null }) => (
  <Provider value={true}>
    <div className="Poster" style={{ padding }}>
      {children}
    </div>
  </Provider>
);

Poster.propTypes = {
  /**
   * Content to display on the Poster.
   */
  children: PropTypes.node,

  /**
   * A valid CSS padding value for the Poster.
   */
  padding: PropTypes.string,
};

export { Context as PosterContext };
export default Poster;
