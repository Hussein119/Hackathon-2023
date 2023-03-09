const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A subject must have a name'],
    trim: true, //remove whitespaces
  },
  department: {
    type: String,
  },
  grade: {
    type: String,
  },
  creditHours: {
    type: Number,
    required: [true, 'A subject must have a credit hours'],
  },
  exams: {
    type: [String],
  },
  qsBanks: {
    type: [String],
  },
  booksNames: {
    type: [String],
  },
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
