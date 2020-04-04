var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

var AuthSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

AuthSchema.methods.genHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

AuthSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", AuthSchema);
