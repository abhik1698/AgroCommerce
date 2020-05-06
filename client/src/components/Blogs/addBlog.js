import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createBlog } from "../../actions/blogActions";
// import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Input, Button } from "antd";
import { Container } from "react-bootstrap";

const { TextArea } = Input;
class AddBlog extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const blog = {
      author: JSON.parse(localStorage.getItem("user")).name,
      title: this.state.title,
      body: this.state.body,
    };
    console.log("Blog: ", blog);
    this.props.createBlog(blog);
    this.setState({ author: "", title: "", body: "" });
  }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        {this.props.token && (
          <Container>
            <form onSubmit={(e) => this.onSubmit(e)}>
              <div>
                <br />
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChange}
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                  required
                />
                <br />
                <br />
                <TextArea
                  name="body"
                  placeholder="Body"
                  style={{ textAlign: "center" }}
                  value={body}
                  onChange={this.onChange}
                />
                {/* <br />
                <br /> */}
                <div style={{ textAlign: "center" }}>
                  <Button
                    htmlType="submit"
                    style={{ color: "red", width: "30%" }}
                  >
                    Publish
                  </Button>
                </div>
                <br />
                <br />
              </div>
            </form>
          </Container>
        )}
      </div>
    );
  }
}

// AddBlog.propTypes = {
//   createBlog: propTypes.func.isRequired,
//   token: propTypes.string.isRequired,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //propType
)(withRouter(AddBlog));
