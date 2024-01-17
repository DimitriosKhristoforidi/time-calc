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

const typeSelector = new TypeSelector()

export default typeSelector