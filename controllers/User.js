const { User } = require('../models/index');

module.exports({
  Register: async ({ body }, res) => {
    try {
      const user = new User(body);
      user.password = user.generateHash(body.password);
      user.save()
      res.sendStatus(200);
    }
    catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  Login: async ({ body }, res) => {
    try {
      const user = await User.findOne({$or: {username: body.signInName, email: body.signInName}});
      res.json(new VisibleUser(user.toObject()));
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
})

function VisibleUser ({username, email}) {
  this.username = username;
  this.email = email;
}