import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import * as CrComLib from "@crestron/ch5-crcomlib";
import { padding, positions } from "@mui/system";

const VolumeSlider = ({ join,label }) => {
  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
    CrComLib.publishEvent("n", join, value);
    console.log(value);
    console.log(join);
  };
  const labelStyle = {
    textAling: "center",
    marginBotton: "20px",
    padding: "20px",
  }

  return (
    <>
      <Box>
      <h1 style={labelStyle}>{label}</h1>
        <Slider
          value={value}
          onChange={changeValue}
          size="large"
          style={{ height: 600, marginTop: 30, marginLeft: 100 }}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          orientation="vertical"
          sx={{
            "& .MuiSlider-thumb": {
              width: 45, // Adjust width as needed
              height: 45, // Adjust height as needed
              margin: 0,
            },
            "& .MuiSlider-rail": {
              width:"14px !important",
              backgroundColor: "gray",
            },
            "& .MuiSlideer-track": {
              width: 1,
            },
            "& .MuiSlider-valueLabelOpen":{
              width: 100,
              height: 100,
              fontSize: 44,
            }
          }}
        />
      </Box>
    </>
  );
};

VolumeSlider.propTypes = {
  join: PropTypes.string,
  label: PropTypes.any
}
export default VolumeSlider;
