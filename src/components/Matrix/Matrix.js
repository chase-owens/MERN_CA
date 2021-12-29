import React from "react";
import { isMobile } from "react-device-detect";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { theme } from "../../styles/theme";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.light,
    border: "thin solid #000",
  },
  body: {
    fontSize: 16,
    border: "thin solid #000",
    height: 150,
  },
}))(TableCell);

const Matrix = ({ matrix }) => {
  return (
    <div
      style={{
        margin: "30px 0",
        width: isMobile ? "90vw" : "auto",
        height: "100%",
      }}
    >
      <Typography
        paragraph
        variant="h2"
        style={{
          fontSize: "1.5em",
        }}
        align="center"
        color={
          useMediaQuery(theme.breakpoints.down(740))
            ? "textSecondary"
            : "textPrimary"
        }
      >
        {matrix.title}
      </Typography>
      <Paper>
        <Table>
          <TableHead style={{ width: "100%" }}>
            <TableRow>
              <CustomTableCell>
                <Typography color="textPrimary" align="center">
                  Alternatives
                </Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography color="textPrimary" align="center">
                  Consequences
                </Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography color="textPrimary" align="center">
                  Value
                </Typography>
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matrix.alternatives.map((alternative) => (
              <TableRow key={alternative.alternative}>
                <CustomTableCell>
                  <Typography>{alternative.alternative}</Typography>
                </CustomTableCell>
                <CustomTableCell>
                  {isMobile ? (
                    alternative.consequences.map((q) => (
                      <Typography gutterBottom key={q.outcome}>
                        {q.outcome} ({q.value})
                      </Typography>
                    ))
                  ) : (
                    <ul>
                      {alternative.consequences.map((q) => (
                        <li key={q.outcome + matrix.title}>
                          <Typography>
                            {q.outcome} ({q.value})
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography>{alternative.totalValue}</Typography>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default withWidth({ withTheme: true })(Matrix);
