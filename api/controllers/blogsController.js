const { ObjectId } = require("mongodb");
const Blog = require("../models/blogsSchema");

const addBlog = (data, callback) => {
  Blog.create(data, (err, blog) => {
    if (err) {
      console.log("error saving Blog");
      return callback(err, 500, blog);
    } else {
      return callback(err, 200, blog);
    }
  });
};

const getAllBlogs = (callback) => {
  Blog.find({}, {}, { sort: { created: -1 } }, (err, blogs) => {
    if (err) {
      return callback(err, 500, blogs);
    } else {
      return callback(err, 200, blogs);
    }
  });
};

const getBlog = (id, callback) => {
  if (!ObjectId.isValid(id)) {
    return callback("Invalid Object Id", 400, null);
  }
  Blog.findOne({ _id: id })
    .then((blog) => {
      return callback(null, 200, blog);
    })
    .catch((err) => {
      return callback(err, 400, null);
    });
};

module.exports = {
  addBlog,
  getAllBlogs,
  getBlog,
};
