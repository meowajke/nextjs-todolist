import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
  todoList: [{ text: "Test item", accomplished: false }],
  counter: 0,
};

export default () => {
  let store;

  store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk, createLogger())
  );
  store.__PERSISTOR = persistStore(store);

  return store;
};
