import classNames from "classnames";
import React, { useContext } from "react";

import { SurfaceContext } from "../Surface";

import "./Rule.css";

/**
 * Use `Rule` to display a horizontal rule.
 */
const Rule = () => {
  const surfaceBackground = useContext(SurfaceContext);

  return (
    <hr
      className={classNames({
        Rule: true,
        [`Rule--onDarkBackground`]: surfaceBackground === "dark",
      })}
    />
  );
};

export default Rule;
