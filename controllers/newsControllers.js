const News = require('../models/newsModel');

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();

    res.status(200).json({
      status: 'success',
      results: news.length,
      data: news,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};
exports.getNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

exports.editNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      news: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);

    res.status(201).json({
      status: 'success',
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
