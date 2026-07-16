import PropTypes from "prop-types";
import React from "react";

import "./Base.css";

const Base = ({ children }) => <div className="mdrn">{children}</div>;

Base.propTypes = {
  children: PropTypes.any,
};

export default Base;
