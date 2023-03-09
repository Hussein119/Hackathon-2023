const subject = require('../models/subjectModel');

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await subject.find();

    res.status(200).json({
      status: 'success',
      results: subjects.length,
      data: subjects,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};
exports.getSubject = async (req, res) => {
  try {
    const subject = await subject.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: subject,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

exports.editSubject = async (req, res) => {
  try {
    const subject = await subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'success',
      data: subject,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteSubject = async (req, res) => {
  try {
    await subject.findByIdAndDelete(req.params.id);
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

exports.createSubject = async (req, res) => {
  try {
    const newsubject = await subject.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newsubject,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
