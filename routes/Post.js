const { PostController } = require('../controllers');
const Post = require('../controllers/Post');

const router = require('express').Router();

router.route("/:id")
  .get(PostController.Get)
  .post(PostController.Create)
  .put(PostController.Update)
  .delete(PostController.Delete);

router.route('/')
  .get(PostController.GetPage)

module.exports = router;