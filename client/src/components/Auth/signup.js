import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/authActions";
// import propTypes from "prop-types";

class SignUp extends Component {
  state = {
    nUsername: "",
    nPassword: "",
    confirmNPassword: "",
  };

  _handleSignup = (e) => {
    e.preventDefault();

    const { nUsername, nPassword } = this.state;

    const user = {
      username: nUsername,
      password: nPassword,
    };

    this.props.addUser(user);

    this.setState({
      nUsername: "",
      nPassword: "",
      confirmNPassword: "",
    });
  };

  render() {
    const { nUsername, nPassword, confirmNPassword } = this.state;

    return (
      <div>
        <form
          onSubmit={(e) => {
            nPassword === confirmNPassword
              ? this._handleSignup(e)
              : alert("Password doesn't match");
          }}
        >
          Signup
          <br />
          <input
            type="text"
            name="nUsername"
            placeholder="Username"
            value={nUsername}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <br />
          <input
            type="password"
            name="nPassword"
            placeholder="password"
            value={nPassword}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <br />
          <input
            type="password"
            name="confirmNPassword"
            placeholder="Confirm password"
            value={confirmNPassword}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <br />
          <button type="submit">Signup</button>
          <p>
            {this.props.addedUser
              ? "Account created successully"
              : "Username Taken"}
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
