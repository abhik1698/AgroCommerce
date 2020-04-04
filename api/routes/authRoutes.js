const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const AuthController = require("../controllers/authController");

router.get("/getUser/:username", (req, res) => {
  console.log("Getting specified User");
  AuthController.getUser(req.params.username, (err, status, user) => {
    res.status(status).send({ err, user });
  });
});

router.post("/login", (req, res) => {
  console.log("Login by cred route");
  AuthController.login(req.body, (err, status, user) => {
    // res.status(status).send({ err, user });
    if (user) {
      jwt.sign({ user }, "secretkey", (error, token) => {
        res.status(status).json({
          err,
          token,
        });
      });
    } else {
      res.sendStatus(403);
    }
  });
});

//use it in a route with a middleware like router.post("/posts", verifyToken, (req, res) => {})
//inside, jwt.verify(req.token, 'secretkey', (err, authData)=> {
//   if(err){
//     res.sendStatus(403);
//   } else {
//     res.json({postData, authData})
//   }
// })

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

router.post("/addUser", (req, res) => {
  console.log("on Add User route");
  AuthController.addUser(req.body, (err, status, user) => {
    res.status(status).send({ err, user });
  });
});

module.exports = router;
