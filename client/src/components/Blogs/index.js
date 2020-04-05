import React, { Fragment } from "react";
import { Card, Container, Divider } from "semantic-ui-react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions/blogActions";
import propTypes from "prop-types";
import AddBlog from "./addBlog";
import Moment from "react-moment";

class Blogs extends React.Component {
  // state = {
  //   redirect: false,
  //   blogId: "",
  // };

  // setRedirect = (blogId) => {
  //   this.setState({
  //     redirect: true,
  //     blogId: blogId,
  //   });
  // };

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to={"/" + this.state.blogId + ""} />;
  //   }
  // };
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
        {/* {this.renderRedirect()} */}
        <AddBlog />

        <h1>Blogs</h1>
        {blogs.map((blog, index) => (
          <Container key={index}>
            <Moment fromNow>{blog.created}</Moment>
            <Card
              // onClick={() => {
              //   this.setRedirect(blog._id);
              // }}
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

Blogs.propTypes = {
  fetchBlogs: propTypes.func.isRequired,
  blogs: propTypes.array.isRequired,
  newBlog: propTypes.object,
};

const mapStateToProps = (state) => ({
  blogs: state.blogs.items, //state.blogs becoz of var in Reducers -> index (postActions.js -> payload)
  newBlog: state.blogs.item,
});

export default connect(mapStateToProps, { fetchBlogs })(Blogs);
