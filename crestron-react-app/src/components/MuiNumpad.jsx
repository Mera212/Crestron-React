import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    width: "60%",
    height: "600px",
    backgroundColor: "#249889",
    justifyContent: "center",
  },
  numberRow: {},
  button: {
    height: "60px",
    width: "108px",
    backgroundColor: "#1655a2",
    color: "white",
  },
}));
const enterButton = {
  height: "60px",
  width: "108px",
  marginBottom: "20px",
  padding: "10px",
  alingItems: "center",
  justifyContent: "center",
  backgroundColor: "#1655a2",
  color: "white",
  textAlign: "center",
};

const MuiNumpad = (props) => {
  const { onChange, onKeyPress, setPincode, setNumpad } = props;

  const classes = useStyles();

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (_value) => {
    const newValue = inputValue.concat(_value);

    console.log(newValue);
    setInputValue(newValue);
    console.log("onclick input", inputValue);
    onChange(newValue);
    return newValue;
  };

  const onButtonPress = (_value) => {
    console.log("Input value:", inputValue);
    console.log("_Value:", _value);

    // Convert both values to strings and concatenate them
    const newPin = inputValue + _value.toString();
    console.log("New Pin:", newPin);

    // Handle further operations if needed
    handleOnChange(_value);
    return newPin;
  };

  const handleClear = () => {
    setInputValue("");
    onChange("");
  };

  const handleDelete = () => {
    const newString = inputValue.substring(0, inputValue.length - 1);
    setInputValue(newString);
    onChange(newString);
  };
  const handleEnterPress = () => {
    console.log("Pin code set to:", inputValue); // Log the pin code value
    setPincode(inputValue); // Set the pin code
    setInputValue(""); // Clear the input value
    //onChange(''); // Optionally, trigger the onChange event
    setNumpad(false);
  };

  return (
    <Grid
      container
      className={classes.container}
      spacing={8}>
      <Grid
        item
        xs={12}>
        <Grid
          container
          justifyContent="center"
          spacing={2}>
          {[1, 2, 3].map((value) => (
            <Grid
              key={value}
              item>
              <Button
                onClick={() => onButtonPress(value)}
                color="primary"
                variant="outlined"
                className={classes.button}>
                {value}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}>
        <Grid
          container
          justify="center"
          spacing={2}>
          {[4, 5, 6].map((value) => (
            <Grid
              key={value}
              item>
              <Button
                onClick={() => onButtonPress(value)}
                color="primary"
                variant="outlined"
                className={classes.button}>
                {value}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}>
        <Grid
          container
          justify="center"
          spacing={2}>
          {[7, 8, 9].map((value) => (
            <Grid
              key={value}
              item>
              <Button
                onClick={() => onButtonPress(value)}
                color="primary"
                variant="outlined"
                className={classes.button}>
                {value}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.numberRow}>
        <Grid
          container
          justify="center"
          className={classes.numberRow}
          spacing={2}>
          <Grid
            key="dot"
            item>
            <Button
              disabled={!inputValue.length}
              onClick={handleDelete}
              color="primary"
              variant="outlined"
              className={classes.button}>
              &larr;
            </Button>
          </Grid>
          <Grid
            key={0}
            item>
            <Button
              onClick={() => onButtonPress(0)}
              color="primary"
              variant="outlined"
              className={classes.button}>
              0
            </Button>
          </Grid>
          <Grid
            key="clear"
            item>
            <Button
              disabled={!inputValue.length}
              onClick={handleClear}
              color="primary"
              variant="outlined"
              className={classes.button}>
              C
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <button
        style={enterButton}
        onClick={handleEnterPress}>
        ENTER
      </button>
    </Grid>
  );
};

MuiNumpad.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

MuiNumpad.defaultProps = {
  onChange: undefined,
  onKeyPress: undefined,
};

export default MuiNumpad;
