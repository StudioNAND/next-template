import { observable, action } from 'mobx';

class Window {
  @observable
  width = 0;
  @observable
  height = 0;

  @action.bound
  setWindowSize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @action
  setSize({ width, height }) {
    this.width = width;
    this.height = height;
  }

  hydrate(snapshot) {
    this.width = snapshot.width;
    this.height = snapshot.height;
  }
}

export default Window;
