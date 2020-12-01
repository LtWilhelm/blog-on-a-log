const router = require('express').Router();

router.use('/users', require('./User'));
router.use('/posts', require('./Post'));
router.use('/comments', require('./Comment'))

module.exports = router;