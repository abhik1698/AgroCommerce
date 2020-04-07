import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/authActions";
import { Input, Button } from "antd";
import { Container } from "react-bootstrap";
// import propTypes from "prop-types";

class SignUp extends Component {
  state = {
    nFullname: "",
    nUsername: "",
    nPassword: "",
    confirmNPassword: "",
    flag: 0,
  };

  _handleSignup = (e) => {
    e.preventDefault();

    const { nFullname, nUsername, nPassword, confirmNPassword } = this.state;

    if (nPassword === confirmNPassword) {
      const user = {
        fullname: nFullname,
        username: nUsername,
        password: nPassword,
      };

      this.props.addUser(user);

      this.setState({
        flag: 1,
      });
    } else {
      alert("Passwords don't match!");
    }
  };

  render() {
    const { nFullname, nUsername, nPassword, confirmNPassword } = this.state;

    return (
      <Container style={{ width: "50%" }}>
        <form onSubmit={(e) => this._handleSignup(e)}>
          <h2 style={{ color: "white " }}>Signup</h2>
          <Input
            type="text"
            name="nFullname"
            placeholder="Full name"
            value={nFullname}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <br />
          <br />
          <Input
            type="text"
            name="nUsername"
            placeholder="Username"
            value={nUsername}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <br />
          <br />
          <Input
            type="password"
            name="nPassword"
            placeholder="password"
            value={nPassword}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <br />
          <br />
          <Input
            type="password"
            name="confirmNPassword"
            placeholder="Confirm password"
            required
            value={confirmNPassword}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <br />
          <br />

          <center>
            <p
              style={{
                fontWeight: "bold",
                color: this.props.addedUser ? "yellow" : "black",
              }}
            >
              {this.state.flag === 1 &&
                (this.props.addedUser
                  ? "Account created successully"
                  : "Username Taken")}
            </p>
            <Button htmlType="submit">Signup</Button>
          </center>
        </form>
      </Container>
    );
  }
}

// SignUp.propTypes = {
//   addedUser: propTypes.bool.isRequired,
// };

// const mapDipatchStateToProps = (dispatch) => {
//   return {
//     addUser: (user) => dispatch(addUser(user)),
//   };
// };

const mapStateToProps = (state) => ({
  addedUser: state.auth.addedUser,
});

export default connect(mapStateToProps, { addUser })(SignUp);
