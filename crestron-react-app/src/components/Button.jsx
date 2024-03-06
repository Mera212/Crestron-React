import PropTypes from "prop-types";
import * as CrComLib from "@crestron/ch5-crcomlib";
const Button = ({ styles, join, buttonLabel, isSelected, handleClick, }) => {
  const handleButtonClick = () => {
    handleClick(join);
    CrComLib.publishEvent("b", join, true);
    CrComLib.publishEvent("b", join, false);
    console.log(join);
   
  };
  const buttonStyle = isSelected ? { ...styles.buttonSelected } : { ...styles.button };
const buttontext = isSelected ? `${buttonLabel} VALITTU ` : buttonLabel;
  return (
    <>
    <button
      onClick={handleButtonClick}
      style={buttonStyle}>
        {buttontext}
      </button>
    </>
  );
};

Button.propTypes = {
  buttonLabel: PropTypes.any,
  handleClick: PropTypes.func,
  isSelected: PropTypes.any,
  join: PropTypes.any,
  styles: PropTypes.shape({
    button: PropTypes.any,
    buttonSelected: PropTypes.any,
    container: PropTypes.any
  })
}
export default Button;
