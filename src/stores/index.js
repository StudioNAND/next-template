import { observable, action } from 'mobx';

class DataStore {
  @observable
  width = 0;
  @observable
  height = 0;

  @action.bound
  setWindowSize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}

const dataStore = new DataStore();

export default dataStore;
