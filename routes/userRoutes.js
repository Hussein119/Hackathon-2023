const express = require('express');
const UserControllers = require('../controllers/UserControllers');

const router = express.Router();
// user page
router
  .route('/')
  .get(UserControllers.getAllUsers)
  .post(UserControllers.createUser);
router
  .route('/:id')
  .get(UserControllers.getUser)
  .patch(UserControllers.editUser)
  .delete(UserControllers.deleteUser);

module.exports = router;
