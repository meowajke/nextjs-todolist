import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";

import rootReducer from "../reducer";

export default function makeStore(initialState) {
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "root",
    storage,
  };

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    applyMiddleware(thunk, createLogger())
  );

  store["__PERSISTOR"] = persistStore(store);
  return store;
}
