import React from "react";

import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greeting from "./Greeting.jsx";

import configureStore from "../redux/configureStore";

const App = () => {
  return (
    <Provider store={configureStore}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<h1>Home of greetings</h1>} />
          <Route exact path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
