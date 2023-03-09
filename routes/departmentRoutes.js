const express = require('express');

const departmentControllers = require('../controllers/departmentControllers');

const router = express.Router();

router
  .route('/')
  .get(departmentControllers.getDepartments)
  .post(departmentControllers.createDepartment);
router
  .route('/:id')
  .get(departmentControllers.getDepartment)
  .patch(departmentControllers.editDepartment)
  .delete(departmentControllers.deleteDepartment);

module.exports = router;
