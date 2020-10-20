import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import { createWrapper } from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";

import reduxStore from "./store";

import Main from "./containters/Main";

const store = reduxStore();

class ToDoList extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component ? await Component.getInitialProps(ctx) : {};

    console.log(pageProps);
    return { pageProps };
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

const wrapper = createWrapper(reduxStore, { debug: true });
export default wrapper.withRedux(ToDoList);
