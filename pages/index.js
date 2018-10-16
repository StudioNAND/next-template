/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import async from '../utils/async';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  icon: {
    color: 'green',
  },
});

/*
 * This is an example on how to use modules that require on the window.
 * We are resolving the import of the module upon componentDidMount
 * which will not load the module on the server. See chapter on
 * Server Side Rendering inside the README.
 */
@async(
  () =>
    new Promise(resolve => {
      resolve({
        WindowSize: require('../components/WindowSize').default,
      });
    }),
)
class Index extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    WindowSize: PropTypes.func,
  };
  static defaultProps = {
    WindowSize: null,
  };

  render() {
    const { classes, WindowSize } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          StudioNAND
        </Typography>
        <Typography variant="h5" gutterBottom>
          Next.js + Material-UI
        </Typography>
        <CheckCircle className={classes.icon} fontSize="large" />
        {WindowSize && <WindowSize />}
      </div>
    );
  }
}

export default withStyles(styles)(Index);
