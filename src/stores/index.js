import DataStore from './DataStore';
// import UiStore from './UiStore';
import { configure } from 'mobx';

configure({ useProxies: 'never' });

export const getStoreInstances = () => {
  const dataStore = new DataStore();
  // const uiStore = new UiStore();

  // uiStore.connectStores({ dataStore });
  // dataStore.connectStores({ uiStore });

  if (global.window) {
    window.ds = dataStore;
    // window.us = uiStore;
  }

  return { dataStore };
};
