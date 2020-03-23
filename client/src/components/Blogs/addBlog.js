import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";
import propTypes from "prop-types";

class AddBlog extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    console.log("post", post);
    this.props.createPost(post);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div style={{ float: "right" }}>
            <h1>Add Blog</h1>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.onChange}
              required
            />
            <br />
            <textarea
              name="body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.onChange}
            />
            <br />
            <button type="submit">Post it</button>
          </div>
        </form>
      </div>
    );
  }
}

AddBlog.propTypes = {
  createPost: propTypes.func.isRequired
};

export default connect(
  null,
  { createPost } //propType
)(AddBlog);
