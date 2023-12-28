const mongoose = require("mongoose");
const validator = require("validator");

// const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [3, "Name should have more than 3 characters"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  firstname: {
    type: String,
    required: [true, "Please Enter Your First Name"],
    maxLength: [30, "First Name cannot exceed 30 characters"],
    minLength: [3, "First Name should have more than 3 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Please Enter Your Last Name"],
    maxLength: [30, "Last Name cannot exceed 30 characters"],
    minLength: [3, "Last Name should have more than 3 characters"],
  },
  birthdate: {
    type: Date,
    required: [true, "Please Enter Your Birthdate"],
  },
  gender: {
    type: String,
    required: [true, "Please Enter Your Gender"],
    enum: ["M", "F"],
  },
  city: {
    type: String,
    required: [true, "Please Enter Your City"],
    maxLength: [30, "City cannot exceed 30 characters"],
    minLength: [3, "City should have more than 3 characters"],
  },
  address: {
    type: String,
    required: [false],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  role: {
    type: String,
    required: [true, "Please Enter Your Role"],
    enum: ["M", "F", "A"],
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
