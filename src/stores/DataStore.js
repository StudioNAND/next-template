import { toJS } from 'mobx';
import Window from './modules/Window';

class DataStore {
  constructor() {
    this.window = new Window({});
  }

  // function to re-hydrate store from a serialized snapshot
  hydrate = snapshot => {
    this.window.hydrate(snapshot.window);
  };

  // funciton that creates the snapshot of thr store
  // you should extract connected stores via destructuring
  toJSON = () => {
    const { ...rest } = this;
    return toJS(rest);
  };

  connectStores = ({}) => {};
}

export default DataStore;
