import React, { Component, Fragment } from "react";
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
      author: JSON.parse(localStorage.getItem("user")).username,
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
          <Fragment>
            <form onSubmit={(e) => this.onSubmit(e)}>
              <div>
                <br />
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChange}
                  required
                />
                <TextArea
                  name="body"
                  placeholder="Body"
                  value={body}
                  onChange={this.onChange}
                />
                <Button htmlType="submit">Post it</Button>
                <br />
                <br />
              </div>
            </form>
          </Fragment>
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
