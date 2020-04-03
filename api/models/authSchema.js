var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Auth", AuthSchema);
