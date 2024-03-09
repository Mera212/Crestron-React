import PropTypes from "prop-types";
import ButtonContainer from "./ButtonContainer";
import * as CrComLib from "@crestron/ch5-crcomlib";

const ShutDown = ({ setPage }) => {
  const handleClick = () => {
    setPage("start");
  };
  //CrComLib.subscribeState("", handleClick());
  return (
    <div>
      <ButtonContainer
        joinValues={[1, 2, 3, 4, 5]}
        buttonLabel={["PALAA", "SAMMUTA"]}
        count={2}
      />
    </div>
  );
};

ShutDown.propTypes = {
  setPage: PropTypes.func,
};
export default ShutDown;
