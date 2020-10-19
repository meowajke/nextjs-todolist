import * as Action from "../constants";

export function incrementCounter() {
  return {
    type: Action.Increment,
  };
}
