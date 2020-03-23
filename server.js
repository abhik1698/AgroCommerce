const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const Post = require("./backend/schemas/postSchema");

//BodyParser Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Enable CORS
var cors = require("cors");
app.use(cors());

//Connect to Mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/ecomus", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// app.use('/api/items', items);
app.get("/", (req, res) => res.send("happy to be here" + Post));

app.get("/getPosts", (req, res) => {
  console.log("getting all posts");
  Post.find({}, {}, { sort: { created: -1 } }, (err, posts) => {
    if (err) {
      res.send("error occured");
    } else {
      console.log(posts);
      res.json(posts);
    }
  });
});

//Post Req
app.post("/addPost", (req, res) => {
  console.log("POST route");
  Post.create(req.body, (err, post) => {
    if (err) {
      res.send("error saving post");
    } else {
      console.log(post);
      res.send(post);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
