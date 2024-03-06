import PropTypes from "prop-types";
import ButtonContainer from "./ButtonContainer";
import power from "../assets/power.png";
import VolumeSlider from "./VolumeSlider";
import "./style.css";
import { useState } from "react";

const Source = ({ setPage }) => {
  const [subPage, setSubpage] = useState("2");

  const containerStyle = {
    vertical: {
      position: "absolute",
      bottom: "300px",
      left: "1px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "1080px",
      margin: "10px 0",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    horizontal: {
      container: {
        display: "flex",
        flexWrap: "wrap", // Allow items to wrap to the next row
        justifyContent: "space-around",
      },
    },
    slideContainer: {
      display: "flex",
      width: "10px",
      marginRight:"500px",
    },
    slider: {
      display: "flex",
      transform: "rotate(90deg)",
      height: "10px",
      width: "700px",
      
    },
    audio:{
      display: "flex",
      flexWrap: "wrap", // Allow items to wrap to the next row
      justifyContent: "space-around",
    
    }
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

  return (
    <>
      <div style={containerStyle.vertical}>
        <ButtonContainer
          style={containerStyle.vertical}
          label="VALIKKO"
          subPage={setSubpage}
          count={5}
          joinValues={["1", "2", "3", "4", "5"]}
          buttonLabel={[
            "VALAISTUS",
            "AUDIO",
            "PROJEKTORI",
            "JUORU",
            "JUORU AUDIO",
          ]}
        />
      </div>
      <div>
        {subPage === "1" ? (
          <div style={containerStyle.horizontal}>
            <ButtonContainer
              style={containerStyle.horizontal}
              label="VALAISTUS"
              count={8}
              joinValues={[
                "100",
                "101",
                "102",
                "103",
                "104",
                "105",
                "106",
                "107",
                "108",
              ]}
              buttonLabel={[
                "TILANNE 1",
                "TILANNE 2",
                "TILANNE 3",
                "TILANNE 4",
                "TILANNE 5",
                "TILANNE 6",
                "TILANNE OFF",
              ]}
            />
          </div>
        ) : subPage === "2" ? (
          <div style={containerStyle.audio}>
            <span style={containerStyle.slideContainer}>
              <VolumeSlider />
              <VolumeSlider />
              <VolumeSlider/>
              </span>
              <div style={containerStyle.horizontal}>
                <ButtonContainer
                  count={2}
                  buttonLabel={["PÄÄLLE", "POIS"]}
                  joinValues={["120", "121"]}
                />

                <ButtonContainer
                  count={2}
                  buttonLabel={["PÄÄLLE", "POIS"]}
                  joinValues={["122", "123"]}
                />
                <ButtonContainer
                  count={2}
                  buttonLabel={["PÄÄLLE", "POIS"]}
                  joinValues={["124", "125"]}
                />
             
            </div></div>
          
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
