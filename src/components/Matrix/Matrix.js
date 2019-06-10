import React from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.light,
    border: 'thin solid #000'
  },
  body: {
    fontSize: 16,
    border: 'thin solid #000'
  }
}))(TableCell);

const Matrix = ({ matrix }) => {
  return (
    <div
      style={{
        margin: '30px 0',
        width: '100%',
        minWidth: 320
      }}
    >
      <Typography
        paragraph
        variant='h2'
        style={{
          fontSize: '1.5em'
        }}
        align='center'
        color={
          useMediaQuery(theme.breakpoints.down(740))
            ? 'textSecondary'
            : 'textPrimary'
        }
      >
        {matrix.title}
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>
                <Typography color='textPrimary' align='center'>
                  Alternative
                </Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography color='textPrimary' align='center'>
                  Consequences
                </Typography>
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matrix.alternatives.map(alternative => (
              <TableRow key={alternative.title}>
                <CustomTableCell>
                  <Typography>{alternative.alternative}</Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <ul>
                    {alternative.consequences.map(q => (
                      <li>
                        <Typography>{q}</Typography>
                      </li>
                    ))}
                  </ul>
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
