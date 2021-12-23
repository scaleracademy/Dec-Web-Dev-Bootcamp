const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  author: {
    type: String,
    default: "",
  },
  notes: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
