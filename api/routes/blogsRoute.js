const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const BlogsController = require("../controllers/blogsController");

router.get("/getAllBlogs", (req, res) => {
  console.log("Getting all Blogs");
  BlogsController.getAllBlogs((err, status, blogs) => {
    res.status(status).send({ err, blogs });
  });
});

router.post("/addBlog", verifyToken, (req, res) => {
  console.log("on Add Blog route");
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      BlogsController.addBlog(req.body, (err, status, blog) => {
        res.status(status).send({ err, blog, authData });
      });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
