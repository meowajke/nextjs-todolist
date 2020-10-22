import * as Main from '../constants/Main';

const initialState = {
  todoList: [],
};

export default function MainReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case Main.None:
      nextState = { ...state };
      break;

    case Main.AddItem:
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

    case Main.DeleteItem:
      nextState = {
        ...state,
        todoList: state.todoList.filter((item, i) => i !== action.payload),
      };
      break;

    case Main.CompleteItem:
      nextState = {
        ...state,
        todoList: state.todoList.map((item, i) =>
          i === action.payload ? { ...item, accomplished: true } : item
        ),
      };
      break;

    case Main.RestoreItem:
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
