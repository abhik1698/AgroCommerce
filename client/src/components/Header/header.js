import React, { Component } from "react";
import { Menu, Segment, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../../actions/authActions";
// import propTypes from "prop-types";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <center>
        <Segment inverted>
          <h1 style={{ color: "white", display: "inline" }}>Agro&nbsp;</h1>
          <Image
            style={{ display: "inline" }}
            src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
            size="small"
          />
          <h1 style={{ color: "white", display: "inline" }}>&nbsp;Commerce</h1>
          <Menu inverted pointing secondary>
            <Menu.Item
              position="left"
              as={Link}
              name="home"
              to="/"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              <Icon name="home" />
              Home
            </Menu.Item>

            <Menu.Item
              as={Link}
              name="blogs"
              to="/blogs"
              active={activeItem === "blogs"}
              onClick={this.handleItemClick}
            >
              <Icon loading name="certificate" />
              Blogs
            </Menu.Item>

            <Menu.Menu as={Link} name="login" to="/login" position="right">
              <Button
                content={
                  this.props.token
                    ? "logout ( " +
                      JSON.parse(localStorage.getItem("user")).fullname +
                      " )"
                    : "login"
                }
                onClick={this.props.token && this.props.logout}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </center>
    );
  }
}

// Header.propTypes = {
//   token: propTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userData: state.auth.userData,
});

export default connect(mapStateToProps, { login, logout })(Header);
