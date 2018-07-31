import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Header = props => <h3 style={{ color: "#FFF" }}>{props.children}</h3>;

//Header
Header.defaultProps = {
  children: "RocketBook"
};

Header.propTypes = {
  children: PropTypes.string
};

export default Header;
