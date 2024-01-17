import { makeAutoObservable } from "mobx";

class TypeSelector {
  type = "oneByOne"
  constructor() {
    makeAutoObservable(this)
  }

  selectType (type) {
    this.type = type
  }
}

export default new TypeSelector()