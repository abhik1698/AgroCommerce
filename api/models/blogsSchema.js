var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlogsSchema = new Schema({
  author: { type: String, default: "Anonymous" },
  title: { type: String, required: true },
  body: { type: String },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Blog", BlogsSchema);
