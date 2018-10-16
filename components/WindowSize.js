import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';

@inject('dataStore')
@observer
class WindowSize extends React.Component {
  static propTypes = {
    dataStore: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.dataStore.setWindowSize();
    window.addEventListener('resize', this.props.dataStore.setWindowSize);
  }

  handleWindowResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  render() {
    const { dataStore } = this.props;
    return (
      <div>
        <Typography variant="h6">
          width: {dataStore.width}
          px
        </Typography>
        <Typography variant="h6">
          height: {dataStore.height}
          px
        </Typography>
      </div>
    );
  }
}

export default WindowSize;
