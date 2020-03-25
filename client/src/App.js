import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Index from "./components/Home";

import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Blogs from "./components/Blogs/index.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Index} />
          <Provider store={store}>
            <Route path="/blogs" exact component={Blogs} />
          </Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
