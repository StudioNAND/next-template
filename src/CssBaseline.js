import React from 'react';
import PropTypes from 'prop-types';
import MuiCssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    html: {
      fontSize: `${theme.htmlFontSize}px`,
    },
    body: {
      backgroundColor: theme.palette.background.page,
      color: theme.palette.text.default,
    },
  },
}));

const CssBaseline = ({ children }) => {
  useStyles();
  return (
    <React.Fragment>
      <MuiCssBaseline />
      {children}
    </React.Fragment>
  );
};

CssBaseline.propTypes = {
  children: PropTypes.node,
};

CssBaseline.defaultProps = {
  children: null,
};

export default CssBaseline;
