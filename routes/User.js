const { UserController } = require('../controllers');

const router = require('express').Router();

router.post("/register", UserController.Register)
router.post("/login", UserController.Login)

module.exports = router;
