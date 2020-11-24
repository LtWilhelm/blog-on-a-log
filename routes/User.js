const { UserController } = require('../controllers');

const router = require('express').Router();

router.post("/register", UserController.Register)
router.post("/signin", UserController.SignIn)

module.exports = router;
