import * as Action from "../constants";

function Reducer(state, action) {
  let nextState;

  switch (action.type) {
    case Action.None:
      break;

    case Action.AddItem:
      nextState = {
        ...state,
        todoList: [
          ...state.todoList,
          {
            text: action.payload,
            accomplished: false,
          },
        ],
      };
      break;

    case Action.DeleteItem:
      nextState = {
        ...state,
        todoList: state.todoList.filter((item, i) => i !== action.payload),
      };
      break;

    case Action.CompleteItem:
      nextState = {
        ...state,
        todoList: state.todoList.map((item, i) =>
          i === action.payload ? { ...item, accomplished: true } : item
        ),
      };
      break;

    case Action.RestoreItem:
      nextState = {
        ...state,
        todoList: state.todoList.map((item, i) =>
          i === action.payload ? { ...item, accomplished: false } : item
        ),
      };
      break;

    default:
      nextState = state;
  }

  return nextState;
}

export default Reducer;
