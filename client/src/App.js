import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Index from "./components/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Blogs from "./components/Blogs";
import Auth from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/login" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
