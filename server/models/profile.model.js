const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    maxLength: 50,
  },
  caption: {
    type: String,
  },
  headline: {
    type: String,
  },
  highlights: {
    type: String,
  },
  experience: {
    type: String,
  },
  qualification: {
    type: String,
  },
  address: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
});

module.exports = mongoose.model("Profile", profileSchema);