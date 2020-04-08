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
  Auth.findOne({ phone: credentials.phone })
    .then((user) => {
      if (!user) {
        console.log("Hey new user");
        var auth = new Auth(credentials);
        auth.save((error, newUser) => {
          if (error) {
            console.log("error in saving user" + error);
            return callback(error, 500, null);
          }
          return callback(null, 200, newUser);
        });
      }
      if (user) {
        console.log("Hey existing user!");
        console.log(credentials);
        if (credentials.name) {
          user.name = credentials.name;
          user.save((e, u) => {
            if (e) {
              console.log("Error in updating name: " + e);
              return callback(e, 500, null);
            } else {
              console.log("updated name");
              return callback(null, 200, u);
            }
          });
        }
        return callback(null, 200, user);
      }
    })
    .catch((err) => console.log("Promise err: " + err));
};

const getUser = (phone, callback) => {
  Auth.findOne({ phone: phone }, (err, user) => {
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
