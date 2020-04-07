import React, { useState, useEffect } from "react";
import { Card, Container, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions/blogActions";
import propTypes from "prop-types";
import AddBlog from "./addBlog";
import Moment from "react-moment";
import axios from "axios";

class Blogs extends React.Component {
  state = {
    redirect: false,
    blogId: "",
  };

  setRedirect = (blogId) => {
    this.setState({
      redirect: true,
      blogId: blogId,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"/blogs/" + this.state.blogId + ""} />;
    }
  };
  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    var blogs = this.props.blogs;
    const newBlog = this.props.newBlog;
    if (blogs[0] !== newBlog && newBlog.title) {
      blogs.unshift(newBlog);
    }
    return (
      <Container>
        {this.renderRedirect()}
        <AddBlog />

        <h1 style={{ color: "white " }}>Blogs</h1>
        {blogs.map((blog, index) => (
          <Container key={index}>
            <Moment fromNow>{blog.created}</Moment>
            <Card
              onClick={() => {
                this.setRedirect(blog._id);
              }}
              header={blog.title}
              meta={blog.author}
              style={{ width: "100%" }}
              description={blog.body}
            />
            <Divider />
          </Container>
        ))}
      </Container>
    );
  }
}

function ViewBlog(props) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    var mounted = true;

    const loadBlog = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/blogs/getBlog/" + id
      );
      if (mounted) {
        setBlog(response.data);
      }
    };

    loadBlog();

    return () => {
      mounted = false;
    };
  }, []);

  if (!blog) {
    return <h1>Page not found</h1>;
  }

  return (
    <Container>
      <Moment fromNow>{blog.created}</Moment>
      <Card
        header={blog.title}
        meta={blog.author}
        style={{ width: "100%" }}
        description={blog.body}
      />
    </Container>
  );
}

Blogs.propTypes = {
  fetchBlogs: propTypes.func.isRequired,
  blogs: propTypes.array.isRequired,
  newBlog: propTypes.object,
};

ViewBlog.propTypes = {
  fetchBlogs: propTypes.func.isRequired,
  blogs: propTypes.array.isRequired,
  newBlog: propTypes.object,
};

const mapStateToProps = (state) => ({
  blogs: state.blogs.items, //state.blogs becoz of var in Reducers -> index (postActions.js -> payload)
  newBlog: state.blogs.item,
});

export default {
  Blogs: connect(mapStateToProps, { fetchBlogs })(Blogs),
  ViewBlog: connect(mapStateToProps, { fetchBlogs })(ViewBlog),
};
