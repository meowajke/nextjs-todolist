import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['MainReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function makeStore() {
  const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, createLogger())
  );
  store['__PERSISTOR'] = persistStore(store);

  return store;
}
