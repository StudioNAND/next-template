import React from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import useStores from '../utils/useStores';

const WindowSize = () => {
  const { dataStore } = useStores();

  React.useEffect(() => {
    window.addEventListener('resize', dataStore.window.setWindowSize);
    return () =>
      window.removeEventListener('resize', dataStore.window.setWindowSize);
  }, []);

  return useObserver(() => (
    <div>
      <Typography variant="h6">
        width: {dataStore.window.width}
        px
      </Typography>
      <Typography variant="h6">
        height: {dataStore.window.height}
        px
      </Typography>
    </div>
  ));
};

export default WindowSize;
