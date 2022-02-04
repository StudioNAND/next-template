import { makeObservable, observable, computed, action, flow } from "mobx";

class UiStore {
  constructor(props) {
    makeObservable(this, {
    });
  }

  connectStore = ({ dataStore }) => {
    this.dataStore = dataStore;
  };

}

export default UiStore;

