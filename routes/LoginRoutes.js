const express = require('express');
const LoginControllers = require('../controllers/LoginControllers');

const router = express.Router();
// Login
router
  .route('/')
  .post(LoginControllers.login)
  .post(LoginControllers.sendTempCode)
  .patch(LoginControllers.editpassword);

module.exports = router;
