// Navbar.jsx

import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ setPage }) => {
  const handleButtonClick = () => {
    setPage("shutdown");
  };
  const navbarStyle = {
    position: "fixed", // Fixed position so it stays at the top
    top: 0, // Distance from the top of the viewport
    height:"50px",
    width: "100%", // Full width of the viewport
    backgroundColor: "#1655a2",
    borderRadius:"0px 0px 30px 30px",
    padding: "10px", // Adjust padding as needed
    color: "#fff", // Text color
  };

  return (
    <div style={navbarStyle}>
      {/* Navbar content goes here */}
      <button onClick={handleButtonClick}>Shutdown</button>
    </div>
  );
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;
