const Auth = require("../models/authSchema");

const addUser = (data, callback) => {
  Auth.findOne({ username: data.username }, (err, oldUser) => {
    if (err) return callback(err, 500, null);
    else if (oldUser && data.username === oldUser.username) {
      console.log("User exists");
      return callback("User exists", 403, null);
    } else {
      let auth = new Auth(data);
      auth.password = auth.genHash(data.password);

      auth.save((err, user) => {
        if (err) {
          console.log("error adding User");
          console.log(err);
          return callback(err, 500, null);
        } else {
          return callback(null, 200, user);
        }
      });
    }
  });
};

const login = (credentials, callback) => {
  Auth.findOne({ username: credentials.username }, (err, user) => {
    if (err) {
      console.log(err);
      return callback(err, 500, null);
    } else {
      if (
        !!user &&
        credentials.username === user.username &&
        user.compareHash(credentials.password)
      ) {
        return callback(err, 200, user);
      }
      return callback(err, 403, null);
    }
  });
};

const getUser = (username, callback) => {
  Auth.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log(err);
      return callback(err, 500, user);
    } else {
      return callback(err, 200, user);
    }
  });
};

module.exports = {
  addUser,
  getUser,
  login,
};
