const Post = require("../models/postSchema");

const addPost = (data, callback) => {
  Post.create(data, (err, post) => {
    if (err) {
      console.log("error saving post");
      return callback(err, 500, post);
    } else {
      return callback(err, 200, post);
    }
  });
};

const getAllPosts = callback => {
  Post.find({}, {}, { sort: { created: -1 } }, (err, posts) => {
    if (err) {
      return callback(err, 500, posts);
    } else {
      console.log(posts);
      return callback(err, 200, posts);
    }
  });
};

module.exports = {
  addPost,
  getAllPosts
};
