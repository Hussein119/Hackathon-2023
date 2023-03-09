const department = require('../models/departmentModel');

exports.getDepartments = async (req, res) => {
  try {
    const departments = await department.find();

    res.status(200).json({
      status: 'success',
      results: departments.length,
      data: departments,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};
exports.getDepartment = async (req, res) => {
  try {
    const departments = await department.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: departments,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

exports.editDepartment = async (req, res) => {
  try {
    const departments = await department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      data: departments,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteDepartment = async (req, res) => {
  try {
    await department.findByIdAndDelete(req.params.id);
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

exports.createDepartment = async (req, res) => {
  try {
    const newdepartment = await department.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newdepartment,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
