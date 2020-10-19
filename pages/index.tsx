import * as React from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "next/app";

import makeStore from "./store";
const store = makeStore({ todoList: [], counter: 0 });

class ToDoList extends App {
  public static async getInitialProps({ Component, ctx }) {
    const pageProps =
      Component && Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps: {} };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate
          persistor={store["__PERSISTOR"]}
          loading={<span>loading...</span>}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(ToDoList);
