import PropTypes from "prop-types";
import Lights from "./Lights";
import Menu from "./Menu";
import Audio from "./Audio";
import Projector from "./Projector";
import Camera from "./Camera";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Electric from "./Electric";
import Navbar from "./NavBar";
import "./style.css";
import { useState } from "react";
import DsDisplays from "./DsDisplays";
import MuiNumpad from "./MuiNumpad";
import SimpleNumpad from "./SimpleNumpad";
import MenuSimple from "./MenuSimple";
import AudioAdvanced from "./AudioAdvanced";

const Source = ({ setPage }) => {
  const [subPage, setSubpage] = useState("1");
  const [pinCode, setPincode] = useState("1234");
  const [numPad, setNumpad] = useState(false);

  const containerStyle = {
    vertical: {
      position: "absolute",
      left: "2px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "auto",
      marginLeft: "40px",
      padding: "1px",
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
        marginLeft: "20px",
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
    numPad: {
      position: "fixed",
      top: 0,
      left: 450,
      borderRadius: "10px",
      paddingTop: "25px",
      padding: "10px",
      height: "auto",
      width: "auto",
      overflowY: "auto",
      marginTop: "150px",
    },
  };
  const powerContainerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
  };

  const handleClick = () => {
    setPage("shutdown");
  };
  return (
    <>
      <Navbar
        numPad={numPad}
        setNumpad={setNumpad}
        setPincode={setPincode}
      />
      <div style={containerStyle.vertical}>
        {pinCode === "1234" ? (
          <Menu setSubpage={setSubpage} />
        ) : (
          <MenuSimple setSubpage={setSubpage} />
        )}
      </div>
      <div style={containerStyle.numPad}>
        {numPad === true ? (
          <MuiNumpad
            setPincode={setPincode}
            setNumpad={setNumpad}
          />
        ) : null}
      </div>
      <div>
        {subPage === "1" ? (
          <Lights />
        ) : subPage === "2" ? (
          <Audio />
        ) : subPage === "3" ? (
          <Projector />
        ) : subPage === "4" ? (
          <DsDisplays />
        ) : subPage === "7" ? (
          <Camera />
        ) : subPage === "6" ? (
          <Electric />
        ) : subPage === "5" ? (
          <AudioAdvanced />
        ) : null}
      </div>
    </>
  );
};

Source.propTypes = {
  setPage: PropTypes.func,
};
export default Source;
