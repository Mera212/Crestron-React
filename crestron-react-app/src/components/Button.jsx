import PropTypes from "prop-types";
import * as CrComLib from "@crestron/ch5-crcomlib";

const Button = ({
  styles,
  label,
  join,
  buttonLabel,
  isSelected,
  handleClick,
  setSubpage,
}) => {
  const handleButtonClick = () => {
    handleClick(join);
    setSubpage(join);
    CrComLib.publishEvent("b", join, true);
    CrComLib.publishEvent("b", join, false);
    console.log(join);
  };

  const buttonStyle = isSelected ? styles.buttonSelected : styles.button;

  return (
    <div>
      <h1 style={styles.label}>{label}</h1>
      <button
        onClick={handleButtonClick}
        style={buttonStyle}>
        {buttonLabel}
      </button>
    </div>
  );
};

Button.propTypes = {
  buttonLabel: PropTypes.any,
  handleClick: PropTypes.func,
  isSelected: PropTypes.any,
  join: PropTypes.any,
  styles: PropTypes.shape({
    button: PropTypes.object,
    buttonSelected: PropTypes.object,
    label: PropTypes.object, // Make sure to include label style
  }),
};

export default Button;
