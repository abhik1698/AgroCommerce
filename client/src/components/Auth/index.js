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
    ack: "",
  };

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("redux token: " + this.props.token);
    if (this.props.token) {
      this.props.logout();
    } else {
      const { phone, otp } = this.state;

      if (phone.length === 10) {
        const credentials = {
          phone: phone,
          otp: otp,
        };

        this.props.login(credentials);
      } else {
        this.setState({ ack: "Enter a valid phone number" });
      }
    }
  };

  render() {
    const { phone, otp, ack } = this.state;

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
                minLength={10}
                maxLength={10}
                placeholder="Phone number"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
                autoFocus
              />
              <p style={{ color: "red" }}>{ack}</p>
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
