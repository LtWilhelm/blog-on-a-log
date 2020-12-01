const { CommentController } = require('../controllers');

const router = require('express').Router();

router.route("/:id")
  .post(CommentController.Create)
  .put(CommentController.Update)
  .delete(CommentController.Delete);

module.exports = router;