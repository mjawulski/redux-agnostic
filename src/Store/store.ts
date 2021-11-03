import { Action } from "./action.model";

export class Store {
  reducers: { [key: string]: Function };
  state: { [key: string]: any };
  subscribers: Function[];

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = initialState;
    this.subscribers = [];
  }

  get value() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = {
      ...this.state,
      book: {
        ...this.state.book,
        author: action.payload,
      },
    };
  }
}
