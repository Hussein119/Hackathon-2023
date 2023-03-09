const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  department: {
    type: String,
  },
  grade: {
    type: String,
  },
  // data: {
  //   type: [[String][String]],
  // },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
