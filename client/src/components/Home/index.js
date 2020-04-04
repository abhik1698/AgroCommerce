import React, { Component, Fragment } from "react";
import Blogs from "../Blogs";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <Fragment>
        {this.props.token ? (
          // After login
          <Fragment>
            <h1>Welcome buddy</h1>
          </Fragment>
        ) : (
          // Not logged in
          <Fragment>
            <h1>Please login</h1>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Home);
