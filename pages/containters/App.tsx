import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { incrementCounter } from "../actions";

interface IAppProps {
  counter: number;
  incrementCounter();
}

class App extends React.Component<IAppProps> {
  static getInitialProps({ store }) {
    return { pageProps: {} };
  }

  public constructor(props) {
    super(props);

    // setInterval(() => {
    //   this.props.incrementCounter();
    // }, 1000);
  }

  public render() {
    return <div className="container">Counter {this.props.counter}</div>;
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    incrementCounter: bindActionCreators(incrementCounter, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
