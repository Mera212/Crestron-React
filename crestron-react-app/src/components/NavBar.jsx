import React from "react";
import PropTypes from "prop-types";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Navbar = ({ setPage,numPad, setNumpad }) => {
  const handleClick = () => {
    setPage("shutdown");
    console.log("Shutting down the system...");
    console.log("Shutting down the system...");
  };
  const showNumPad =()=>{
    setNumpad(!numPad)
    console.log("Showing Num Pad")
  }
  const navbarStyle = {
    position: "fixed", // Fixed position so it stays at the top
    top: 1, // Distance from the top of the viewport
    height:"50px",
    width: "100%", // Full width of the viewport
    backgroundColor: "#1655a2",
    borderRadius:"0px 0px 0px 0px",
    borderRadius:"0px 0px 0px 0px",
    padding: "10px", // Adjust padding as needed
    color: "#fff", // Text color 
   };
  const powerContainerStyle = {
    position: "absolute",
    top: "0px",
    right: "20px",
  };
  const sourceStyle ={
    position :'fixed',
    left:'15%',
    top:'0px',
    margin: "10px",
  };
  const button= {
    //display: "flex",
    //justifyContent: "center",
    //alignItems: "center",
    //padding: "5px",
    backgroundColor: "#1655a2",
    height: "50px",
    width: "108px",
    textAlign: "center",
    color: "white",
    borderWidht: "2px",
    borderColor: "white",
    margin: "0px 0px 0px 65px",
  
    borderRadius: "15px", // Adjust spacing between buttons
  }

  return (
    <div style={navbarStyle}>
    <button style={button} onClick={showNumPad}>PÄÄKÄYTTÄJÄ</button>
    <div style={sourceStyle}>
    <p >PROJEKTORIN LÄHDE:</p>
    <br></br>
    <p >STREAMIN LÄHDE:</p>
</div>
    <div style={powerContainerStyle}>
      
    <PowerSettingsNewIcon
    onClick={handleClick}
      sx={{
        fontSize: "70px"
      }}
    />
    </div></div>
);
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;