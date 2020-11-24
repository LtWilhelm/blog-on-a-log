const router = require('express').Router();

router.use('/users', require('./User'));
router.use('/posts', require('./Post'))

module.exports = router;