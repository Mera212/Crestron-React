// Navbar.jsx

import React from "react";
import PropTypes from "prop-types";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Navbar = ({ setPage }) => {
  const handleClick = () => {
    setPage("shutdown");
    console.log("Shutting down the system...");
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
  const powerContainerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
  };

  return (
    <div style={navbarStyle}>
    <div style={powerContainerStyle}>
      
    <PowerSettingsNewIcon
    onClick={handleClick}
      sx={{
        fontSize: "90px"
      }}
    />
    </div></div>
);
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;
