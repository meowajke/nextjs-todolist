import App from 'next/app';
import { Provider } from 'react-redux';
import * as React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';

import makeStore from '../redux/store';
const store = makeStore();

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    const pageProps =
      Component && Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={store['__PERSISTOR']}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper.withRedux(MyApp);
