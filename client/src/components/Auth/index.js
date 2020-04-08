import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/authActions";
import { Input, Button } from "antd";
import { withRouter } from "react-router-dom";
// import propTypes from "prop-types";
import OtpInput from "react-otp-input";
import { Container } from "react-bootstrap";

class Auth extends Component {
  state = {
    phone: "",
    otp: "",
  };

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("redux token: " + this.props.token);
    if (this.props.token) {
      this.props.logout();
    } else {
      const { phone, otp } = this.state;

      const credentials = {
        phone: phone,
        otp: otp,
      };

      this.props.login(credentials);
    }
  };

  render() {
    const { phone, otp } = this.state;

    return (
      // Login through username
      <Container
        fluid
        style={{
          padding: 20,
          paddingBottom: "100%",
        }}
      >
        <Container>
          <form onSubmit={(e) => this._handleLogin(e)}>
            <center>
              <h2>Login with OTP</h2>
              <Input
                type="number"
                onChange={(e) => this.setState({ phone: e.target.value })}
                value={phone}
                placeholder="Phone number"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
                autoFocus
              />

              <br />
              <br />
              <center style={{ width: "10%" }}>
                <OtpInput
                  onChange={(otp) => this.setState({ otp: otp })}
                  value={otp}
                  numInputs={4}
                  inputStyle={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 30,
                    textAlign: "center",
                  }}
                  separator={<span>-</span>}
                />
              </center>
              <br />

              <br />

              <Button htmlType="submit">
                {this.props.token ? "Logout" : "Login"}
              </Button>
            </center>
          </form>
        </Container>
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
