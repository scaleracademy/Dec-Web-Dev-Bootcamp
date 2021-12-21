const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: "",
  },
  last_name: {
    type: String,
    default: "",
  },
  email_id: {
    type: String,
    default: "",
  },
  phone_number: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
