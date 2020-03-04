import React, { Component } from "react";
// import {Button, } from 'semantic-ui-react';
import PostForm from "./postForm";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

class Index extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  }

  render() {
    const posts = this.state.posts;

    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <h1>Posts</h1>
          {posts.map(post => (
            <div key={post.id} style={postContainer}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </Provider>
    );
  }
}

const postContainer = {
  width: "50%",
  margin: "auto",
  textAlign: "left",
  padding: 10,
  marginTop: 5
};

export { postContainer, Index };
