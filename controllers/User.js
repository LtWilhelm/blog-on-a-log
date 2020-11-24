const { User } = require('../models/index');

module.exports({
  Register: async ({ body }, res) => {
    try {
      await User.create(body);
      res.sendStatus(200);
    }
    catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
})