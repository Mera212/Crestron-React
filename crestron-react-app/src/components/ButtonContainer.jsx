import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonContainer = ({
  styles,
  count,
  label,
  joinValues,
  buttonLabel,
  setSubpage,
}) => {
  console.log(styles)
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (join) => {
    setSelectedButton(join);
  };

  // Generate an array with 'count' number of elements
  const buttons = Array.from({ length: count }, (_, index) => (
    <Button
      key={index}
      styles={styles} // Pass styles directly
      
      join={joinValues[index]}
      buttonLabel={buttonLabel[index]}
      isSelected={joinValues[index] === selectedButton}
      setSubpage={setSubpage}
      handleClick={() => handleButtonClick(joinValues[index])}
    />
  ));

  return (
    <div style={{ marginTop: "1px" }}>
        <p style={styles.label}>{label}</p>
      <div
        style={
          label === "VALIKKO" ? styles.container: styles.horizontalContainer
        }>
        {buttons}
      </div>
    </div>
  );
};

ButtonContainer.propTypes = {
  buttonLabel: PropTypes.any,
  containerStyles: PropTypes.object,
  count: PropTypes.number.isRequired,
  joinValues: PropTypes.array.isRequired, // Array of join values
  label: PropTypes.string.isRequired,
  setSubpage: PropTypes.any,
  styles: PropTypes.shape({
    container: PropTypes.any,
    horizontalContainer: PropTypes.any,
    label: PropTypes.any
  })
}

export default ButtonContainer;
