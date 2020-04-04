import React, { Component } from "react";
import { connect } from "react-redux";
import { createBlog } from "../../actions/blogActions";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Input, Button } from "antd";

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
      author: this.state.author,
      title: this.state.title,
      body: this.state.body,
    };
    console.log("Blog: ", blog);
    this.props.createBlog(blog);
    this.setState({ author: "", title: "", body: "" });
  }

  render() {
    const { author, title, body } = this.state;
    return (
      <div style={{ float: "right" }}>
        {this.props.token ? (
          <form onSubmit={(e) => this.onSubmit(e)}>
            <div>
              <h1>Add Blog</h1>
              <Input
                type="text"
                name="author"
                placeholder="Author Name"
                value={author}
                onChange={this.onChange}
                required
              />
              <br />
              <br />
              <Input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={this.onChange}
                required
              />
              <br />
              <br />
              <TextArea
                name="body"
                placeholder="Body"
                value={body}
                onChange={this.onChange}
              />
              <br />
              <br />
              <Button htmlType="submit">Post it</Button>
            </div>
          </form>
        ) : (
          <Button
            style={{ fontWeight: "bold", fontSize: 20 }}
            onClick={() => this.props.history.push("/login")}
          >
            Login to add blogs
          </Button>
        )}
      </div>
    );
  }
}

AddBlog.propTypes = {
  createBlog: propTypes.func.isRequired,
  token: propTypes.string.isRequired,
};

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
