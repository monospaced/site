import PropTypes from "prop-types";
import React from "react";

import "./Block.css";

const Block = ({ children, height, width }) => (
  <div className="Block" style={{ height, width }}>
    {children}
  </div>
);

Block.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Block;
