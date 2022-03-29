import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<HelloWorld greeting="Hello Home" />}
          />
          <Route
            exact
            path="/hello"
            element={<HelloWorld greeting="Hello at hello route" />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
