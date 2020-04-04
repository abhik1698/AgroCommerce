import React, { Component } from "react";
import Auth from "../Auth/index";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return <Auth />;
  }
}
