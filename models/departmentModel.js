const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A department must have a name'],
    trim: true, //remove whitespaces
  },
  roadMap: {
    type: String,
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
