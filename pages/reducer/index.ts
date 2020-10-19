import { combineReducers } from "redux";
import * as Action from "../constants";

const initialState = { todoList: [], counter: 0 };

function Reducer(state = initialState, action) {
  let nextState = state;

  switch (action.type) {
    case Action.None:
      break;

    case Action.Increment:
      nextState = { ...state, counter: state.counter + 1 };
      break;
  }

  return nextState;
}

export default Reducer;
