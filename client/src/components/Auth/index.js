import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/authActions";
import SignUp from "./signup";
// import propTypes from "prop-types";

class Auth extends Component {
  state = {
    username: "",
    password: "",
  };

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("redux token: " + this.props.token);
    if (this.props.token) {
      localStorage.removeItem("userToken");
      this.props.logout();
    } else {
      const { username, password } = this.state;

      const credentials = {
        username: username,
        password: password,
      };

      this.props.login(credentials);
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <SignUp />

        <form onSubmit={this._handleLogin}>
          Login
          <br />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <br />
          <button type="submit">{this.props.token ? "Logout" : "Login"}</button>
        </form>
      </div>
    );
  }
}

// Auth.propTypes = {
//   token: propTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { login, logout })(Auth);
