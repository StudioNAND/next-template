import { observable, action, toJS } from 'mobx';
import Window from './modules/Window';

class DataStore {
  @observable
  isLoading = true;

  constructor() {
    this.window = new Window({});
  }

  // async function that initializes the stores
  @action.bound
  initialize = async () => {
    this.isLoading = true;
    this.isLoading = false;
  };

  // function to re-hydrate store from a serialized snapshot
  hydrate = snapshot => {
    this.window.hydrate(snapshot.window);
  };

  // funciton that creates the snapshot of thr store
  // you should extract connected stores via destructuring
  getSnapshot = () => {
    const { ...rest } = this;
    return toJS(rest);
  };

  connectStores = ({}) => {};
}

export default DataStore;
