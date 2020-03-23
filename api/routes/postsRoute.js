const express = require("express");
const router = express.Router();
const postController = require("../controllers/postsController");

router.get("/getPosts", (req, res) => {
  console.log("getting all posts");
  postController.getAllPosts((err, status, posts) => {
    res.status(status).send({ err, posts });
  });
});

router.post("/addPost", (req, res) => {
  console.log("POST route");
  postController.addPost(req.body, (err, status, post) => {
    res.status(status).send({ err, post });
  });
});

module.exports = router;
