const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
    min: 16,
    required: true,
  },
  img: {
    type: String,
  },
  followers: {
    type: [String],
  },
});

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
