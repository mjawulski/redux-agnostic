import { Action } from "./action.model";

export class Store {
  reducers: { [key: string]: Function };
  state: { [key: string]: any };
  subscribers: Function[];

  constructor() {
    this.reducers = {};
    this.state = {};
    this.subscribers = [];
  }

  dispatch(action: Action) {
    console.log("Action::", action);
  }
}
