import React from "react";
import withWidth from "@material-ui/core/withWidth";

import Typography from "@material-ui/core/Typography";

const AboutCardSmall = ({ point, color }) => {
  return (
    <div style={{ padding: "30px 30px 0 28px" }}>
      <Typography color={color} paragraph variant="h5">
        {point.question}
      </Typography>
      <Typography color={color} paragraph variant="body1">
        {point.answer}
      </Typography>
      {point.citation !== undefined && (
        <Typography color={color} paragraph variant="overline">
          {point.citation}
        </Typography>
      )}
    </div>
  );
};

export default withWidth({ withTheme: true })(AboutCardSmall);
