import React from "react";
import { Card, Container, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions/blogActions";
import propTypes from "prop-types";
import AddBlog from "./addBlog";
import Moment from "react-moment";

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
      return <Redirect to={"" + this.state.blogId + ""} />;
    }
  };
  componentDidMount() {
    this.props.fetchBlogs();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newBlog) {
      this.props.blogs.unshift(nextProps.newBlog);
    }
  }

  render() {
    const blogs = this.props.blogs;
    return (
      <Container>
        {/* {this.renderRedirect} */}
        <AddBlog />

        <h1>Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog._id} style={{ textAlign: "left" }}>
            <Moment key={1} fromNow>
              {blog.created}
            </Moment>
            <Card
              onClick={() => {
                this.setRedirect(blog._id);
              }}
              key={2}
              header={blog.title}
              meta={blog.author}
              description={blog.body}
            />
            <Divider key={3} />
          </div>
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
