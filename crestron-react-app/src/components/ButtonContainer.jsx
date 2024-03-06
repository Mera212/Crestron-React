import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonContainer = ({
  containerStyles,
  count,
  label,
  joinValues,
  buttonLabel,
}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (join) => {
    setSelectedButton(join);
  };

  const styles = {
    container: {},
    button: {
      display: "flex",
      justifyContent: "space-evenly",
      padding: "1px",
      margin: "10px",
      backgroundColor: "#1655a2",
      height: "75px",
      width: "135px",
      textAlign: "center",
      color: "white",
      alignItems: "center",
    },
    buttonSelected: {
      display: "flex",
      justifyContent: "space-evenly",
      padding: "10px",
      margin: "20px",
      backgroundColor: "#249889",
      height: "75px",
      width: "135px",
      textAlign: "center",
      color: "red",
      alignItems: "center",
      borderWidth: 1,
      borderColor:"red",
      fontSize: "24px",
    

    },
    label: {
      display: "flex",
      flexGrow: "10",
      alignSelf: "center",
      marginBottom: "10px",
      marginLeft: "274px",
    },
  };

  // Generate an array with 'count' number of elements
  const buttons = Array.from({ length: count }, (_, index) => (
    <Button
      key={index}
      styles={{
        button: styles.button,
        buttonSelected: styles.buttonSelected,
      }}
      join={joinValues[index]}
      buttonLabel={buttonLabel[index]}
      isSelected={joinValues[index] === selectedButton}
      handleClick={() => handleButtonClick(joinValues[index])}
    />
  ));

  return (
    <><h1 style={styles.label}>{label}</h1>
      <div style={containerStyles}>
        
        <div style={containerStyles}>{buttons}</div>
      </div>
    </>
  );
};

ButtonContainer.propTypes = {
  buttonLabel: PropTypes.any,
  containerStyles: PropTypes.object,
  count: PropTypes.number.isRequired,
  joinValues: PropTypes.array.isRequired, // Array of join values
  label: PropTypes.string.isRequired,
};

export default ButtonContainer;
