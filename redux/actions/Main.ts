import * as Action from '../constants/Main';

export function AddItem(text: string) {
  return {
    type: Action.AddItem,
    payload: text,
  };
}

export function DeleteItem(index: number) {
  return {
    type: Action.DeleteItem,
    payload: index,
  };
}

export function CompleteItem(index: number) {
  return {
    type: Action.CompleteItem,
    payload: index,
  };
}

export function RestoreItem(index: number) {
  return {
    type: Action.RestoreItem,
    payload: index,
  };
}
