const express = require("express");
const router = express.Router();
const BlogsController = require("../controllers/blogsController");

router.get("/getAllBlogs", (req, res) => {
  console.log("Getting all Blogs");
  BlogsController.getAllBlogs((err, status, blogs) => {
    res.status(status).send({ err, blogs });
  });
});

router.post("/addBlog", (req, res) => {
  console.log("on Add Blog route");
  BlogsController.addBlog(req.body, (err, status, blog) => {
    res.status(status).send({ err, blog });
  });
});

module.exports = router;
