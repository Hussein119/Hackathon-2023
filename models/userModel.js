const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'A user must have an email'],
  },
  password: {
    type: String,
    required: [true, 'A user have a password'],
  },
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true, //remove whitespaces
  },
  academicNumber: {
    type: String,
    unique: true,
  },
  gpa: {
    type: Number,
  },
  grade: {
    type: String,
  },
  section: {
    type: Number,
  },
  classOf: {
    type: String,
  },
  department: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  //studentTimeTable: [[String][String]],
  userType: String,
  academicRecord: [String],
  image: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
