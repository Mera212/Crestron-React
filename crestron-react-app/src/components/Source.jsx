import PropTypes from "prop-types";
import ButtonContainer from "./ButtonContainer";
import power from "../assets/power.png";
import VolumeSlider from "./VolumeSlider";
import "./style.css";

const Source = ({ setPage }) => {
  const containerStyle = {
    vertical: {
      position: "relative",
      bottom: "20px",
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
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      //width: "700px",
      height: "auto",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    slideContainer: {
      display: "flex",
      width: "10px",
    },
    slider: {
      display: "flex",
      transform: "rotate(90deg",
      height: "16px",
      width: "700px",
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

  return (
    <>
    <div style={containerStyle.vertical}>
        <ButtonContainer
          //containerStyles={containerStyle.vertical}
          count={5}
          joinValues={[1, 2, 3, 4, 5]}
          buttonLabel={["VALAISTUS","AUDIO","PROJEKTORI","JUORU","JUORU AUDIO"]}
        /></div>
        
     
      <div>
        <ButtonContainer
          containerStyles={containerStyle.horizontal}
          count={8}
          label={"VALAISTUS"}
          joinValues={["6", "7", "8", "9"]}
          buttonLabel={["TILANNE 1", "TILANNE 2", "TILANNE 3", "TILANNE 4", "TILANNE 5", "TILANNE 6", "TILANNE 7", "TILANNE OFF"]}
        />
       
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
