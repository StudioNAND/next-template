import { makeObservable, observable, computed, action, flow } from "mobx";

class Window {
  width = 0;
  height = 0;
  constructor(props) {
    makeObservable(this, {
      width: observable,
      height: observable, 
      setWindowSize: action.bound,
      setSize: action.bound,
    });
  }

  setWindowSize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

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
