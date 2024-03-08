import PropTypes from "prop-types";
import power from "../assets/power.png";
import Lights from "./Lights";
import Menu from "./Menu";
import Audio from "./Audio";
import Projector from "./Projector";

import Navbar from "./NavBar";
import "./style.css";
import { useState } from "react";
import DsDisplays from "./DsDisplays";

const Source = ({ setPage }) => {
  const [subPage, setSubpage] = useState("1");

  const containerStyle = {
    vertical: {
      position: "absolute",
      left: "2px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "1080px",
      margin: "40px",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      
    },
    horizontal: {
      container: {
        position: "absolute",
        bottom: "200px",
        display: "flex",
        flexWrap: "wrap", // Allow items to wrap to the next row
        justifyContent: "space-around",
        marginTop: "80px",
        marginLeft:"20px",
      },
    },
    slideContainer: {
      display: "flex",
      width: "15px",
      marginRight: "500px",
    },
    slider: {
      display: "flex",
      transform: "rotate(90deg)",
      height: "10px",
      width: "700px",
    },
    audio: {
      display: "flex",
      flexWrap: "wrap", // Allow items to wrap to the next row
      justifyContent: "space-around",
    },
    nav: {
      display: "block",
      height: "20px",
      backgroundColor: "white",
      width: "1920px",
    },
    area:{
      
    },
  };
  const powerContainerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
  };
  const powerStyles = {
    width: "50px",
    height: "auto",
    background: "none",
  };

  const handleClick = () => {
    setPage("shutdown");
  };
console.log(subPage)
  return (
    <>
      
      <div style={containerStyle.vertical}>
        <Menu setSubpage={setSubpage}/>
      </div>
      <div>
        {subPage === "1" ? (
          <Lights/>
        ) : subPage === "2" ? (
          
          <Audio/>
            
        ): subPage === "3" ? (
          
          <Projector/>
            
        ) : subPage === "4" ? (
          
          <DsDisplays/>
            
        ) : null}
      </div>
      <div style={powerContainerStyle}>
        <button
          style={powerStyles}
          onClick={handleClick}>
          <img
            src={power}
            alt="Power"
            style={powerStyles}
          />
        </button>
      </div>
    </>
  );
};

Source.propTypes = {
  setPage: PropTypes.func,
};
export default Source;
