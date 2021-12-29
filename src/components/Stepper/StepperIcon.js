import React from "react";
import Typography from "@material-ui/core/Typography";
import { isMobile } from "react-device-detect";

const StepperIcon = ({ content }) => {
  return (
    <Typography
      align="center"
      style={{
        paddingTop: 2,
        color: "#fff",
      }}
    >
      {content}
    </Typography>
  );
};

export default StepperIcon;
