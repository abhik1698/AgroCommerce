import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/authActions";
import SignUp from "./signup";
import { Input, Button } from "antd";
import { withRouter } from "react-router-dom";
// import propTypes from "prop-types";
import { Container, Image, Row, Col } from "react-bootstrap";

class Auth extends Component {
  state = {
    username: localStorage.getItem("loginUsername"),
    password: localStorage.getItem("loginPassword"),
    rememberMe: false,
    flag: 0,
  };

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("redux token: " + this.props.token);
    if (this.props.token) {
      this.props.logout();
    } else {
      const { username, password } = this.state;

      const credentials = {
        username: username,
        password: password,
      };

      this.props.login(credentials);

      if (this.state.rememberMe) {
        localStorage.setItem("loginUsername", username);
        localStorage.setItem("loginPassword", password);
      }
      this.setState({ flag: 1 });
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      // Login through username
      <Container fluid style={{ backgroundColor: "#555c57", padding: 20 }}>
        <Container style={{ width: "50%" }}>
          <form onSubmit={(e) => this._handleLogin(e)}>
            <h2 style={{ color: "white " }}>Login</h2>
            <br />
            <Input
              type="text"
              name="username"
              placeholder="username"
              required
              value={username}
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
            <br />
            <br />
            <Input
              type="password"
              name="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
            <br />

            <br />
            <center>
              <div style={{ flexDirection: "row", justifyContent: "center" }}>
                <Input
                  type="checkbox"
                  checked={this.state.rememberMe}
                  onChange={() =>
                    this.setState({ rememberMe: !this.state.rememberMe })
                  }
                  style={{ width: 30, height: 20, marginTop: 10 }}
                />
                <label>Remember me</label>
              </div>
              <p style={{ color: "black", fontWeight: "bold" }}>
                {this.state.flag === 1 &&
                  !this.props.token &&
                  "Credentials mismatch"}
              </p>
              <Button htmlType="submit">
                {this.props.token ? "Logout" : "Login"}
              </Button>
            </center>
          </form>
        </Container>
        <SignUp />
      </Container>
    );
  }
}

// Auth.propTypes = {
//   token: propTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { login, logout })(withRouter(Auth));
