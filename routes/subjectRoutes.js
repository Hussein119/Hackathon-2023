const express = require('express');
const subjectControllers = require('../controllers/subjectControllers');

const router = express.Router();

router
  .route('/')
  .get(subjectControllers.getAllSubjects)
  .post(subjectControllers.createSubject);
router
  .route('/:id')
  .get(subjectControllers.getSubject)
  .patch(subjectControllers.editSubject)
  .delete(subjectControllers.deleteSubject);

module.exports = router;
