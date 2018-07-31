import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./Header";
import Post from "./Post";

import "./style.scss";

//App
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Post />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
