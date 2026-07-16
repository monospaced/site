import React from "react";
import * as Icons from "react-feather";

const iconGroupStyle = {
  float: "left",
  padding: "0.75em 0 1.5em",
  width: "9em",
};

const IconStory = () => {
  return Object.keys(Icons)
    .sort()
    .map(icon => {
      const Icon = Icons[icon];
      return (
        <div key={icon} style={iconGroupStyle}>
          <div>
            <Icon />
          </div>
          <small className="u-monospaced">{Icon.name}</small>
        </div>
      );
    });
};

export default IconStory;
