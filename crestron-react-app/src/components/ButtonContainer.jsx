import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonContainer = ({
  containerStyles,
  count,
  label,
  joinValues,
  buttonLabel,
  setSubpage,
}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (join) => {
    setSelectedButton(join);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column", // For vertical buttons
      marginBottom: "10px",
    },
    horizontalContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "583px",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#1655a2",
      height: "75px",
      width: "135px",
      textAlign: "center",
      color: "white",
      margin: "5px",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    buttonSelected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      height: "75px",
      width: "135px",
      textAlign: "center",
      backgroundColor: "#249889",
      color: "red",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    label: {
      flexGrow: 1, // Allow label to expand to take up remaining space
      textAlign: "center",
      marginBottom: "10px",
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
      label={""}
      join={joinValues[index]}
      buttonLabel={buttonLabel[index]}
      isSelected={joinValues[index] === selectedButton}
      setSubpage={setSubpage}
      handleClick={() => handleButtonClick(joinValues[index])}
    />
  ));

  return (
    <>
      <p style={styles.label}>{label}</p>
      <div
        style={
          label === "VALIKKO" ? styles.container : styles.horizontalContainer
        }>
        {buttons}
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
