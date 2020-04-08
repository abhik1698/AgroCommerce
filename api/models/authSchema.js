var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthSchema = new Schema({
  name: { type: String },
  phone: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", AuthSchema);
