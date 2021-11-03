import { Action } from "./Store/action.model";
const initialState = {
  author: "Michal J",
};

export function bookReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "UPDATE_BOOK_AUTHOR": {
      return {
        ...state,
        author: action.payload,
      };
    }
  }
  return state;
}
