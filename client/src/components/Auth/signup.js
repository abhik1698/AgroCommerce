import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/authActions";
import { Input, Button } from "antd";
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
      <div>
        <form onSubmit={(e) => this._handleSignup(e)}>
          <h2>Signup</h2>
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
          <Button htmlType="submit">Signup</Button>
          <p style={{ color: this.props.addedUser ? "green" : "red" }}>
            {this.state.flag === 1 &&
              (this.props.addedUser
                ? "Account created successully"
                : "Username Taken")}
          </p>
        </form>
      </div>
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
