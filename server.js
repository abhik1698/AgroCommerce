const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

app.use(express.json());

// Enabling CORS
var cors = require("cors");
app.use(cors());

//Connect to Mongo
//
mongoose
  .connect(
    "mongodb+srv://agro:agro@cluster0-igxn0.mongodb.net/agro?retryWrites=true&w=majority",
    // "mongodb://127.0.0.1:27017/agro",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("This is for API calls"));

//Auth
const authRoute = require("./api/routes/authRoutes");
app.use("/api/auth", authRoute);

//Blogs
const blogsRoute = require("./api/routes/blogsRoute");
app.use("/api/blogs", blogsRoute);

// To run client build files
var path = require("path");

app.use(express.static("client/build"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client/build/index.html"))
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
