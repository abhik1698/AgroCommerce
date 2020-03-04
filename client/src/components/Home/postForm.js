import React, { Component } from "react";
import { postContainer } from "./index";

class PostForm extends Component {
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

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div style={postContainer}>
            <h1>Add Post</h1>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <br />
            <br />
            <textarea
              name="body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.onChange}
            />
            <br />
            <br />
            <button type="submit">Post it</button>
            <br />
            <br />
            <hr />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
