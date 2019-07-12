import React, { Component, Fragment } from "react";

import Carousel from "./Carousel";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Carousel />
      </Fragment>
    );
  }
}

export default App;
