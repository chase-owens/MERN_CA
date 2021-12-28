import React from "react";
import { theme } from "../../styles/theme";

import Grid from "@material-ui/core/Grid";
import twoXtwo from "../Matrix/2x2.config";
import Matrix from "../Matrix/Matrix";
import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Matricies = () => {
  const color = useMediaQuery(theme.breakpoints.down(740))
    ? "textSecondary"
    : "inherit";
  return (
    <Grid container spacing={8} justifyContent="space-around">
      {twoXtwo.map((matrix, i) => (
        <Grid key={i} item>
          <Matrix matrix={matrix} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withWidth({ withTheme: true })(Matricies);
