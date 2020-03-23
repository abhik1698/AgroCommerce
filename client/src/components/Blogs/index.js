import React from "react";
import { Card, Container, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import propTypes from "prop-types";
import AddBlog from "./addBlog";
import Moment from "react-moment";

class Blogs extends React.Component {
  state = {
    redirect: false,
    blogId: ""
  };

  setRedirect = blogId => {
    this.setState({
      redirect: true,
      blogId: blogId
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"" + this.state.blogId + ""} />;
    }
  };
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const blogs = this.props.posts;
    return (
      <Container>
        {/* {this.renderRedirect} */}
        <AddBlog />

        <h1>Blogs</h1>
        {blogs.map(blog => (
          <div key={blog._id} style={{ textAlign: "left" }}>
            <Moment fromNow>{blog.created}</Moment>
            <Card
              key={blog._id}
              onClick={() => {
                this.setRedirect(blog._id);
              }}
              header={blog.title}
              meta={blog.author}
              description={blog.body}
            />
            <Divider />
          </div>
        ))}
      </Container>
    );
  }
}

Blogs.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
  newPost: propTypes.object
};

const mapStateTOProps = state => ({
  posts: state.posts.items, //state.posts becoz of var in Reducers -> index (postActions.js -> payload)
  newPost: state.posts.item
});

export default connect(
  mapStateTOProps,
  { fetchPosts }
)(Blogs);
