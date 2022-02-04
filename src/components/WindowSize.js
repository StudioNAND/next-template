import React from 'react';
import { useObserver } from 'mobx-react';
import {Typography} from '@mui/material';
import {useStores} from '../stores/index';

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
