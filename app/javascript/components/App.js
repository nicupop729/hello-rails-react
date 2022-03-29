import React from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HelloWorld from "./HelloWorld";

import configureStore from "../redux/configureStore";
class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HelloWorld />} />
            <Route exact path="/hello" element={<HelloWorld />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
