const express = require('express');
const newsControllers = require('../controllers/newsControllers');

const router = express.Router();

router
  .route('/')
  .get(newsControllers.getAllNews)
  .post(newsControllers.createNews);
router
  .route('/:id')
  .get(newsControllers.getNews)
  .patch(newsControllers.editNews)
  .delete(newsControllers.deleteNews);

module.exports = router;
