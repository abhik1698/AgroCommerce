import React from "react";
import Header from "./components/Header/header";
import Home from "./components/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "./components/Auth";
import Blogs from "./components/Blogs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/login" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
