const { User } = require('../models/index');

module.exports = ({
  Register: async ({ body }, res) => {
    try {
      let user = new User(body);
      user.password = user.generateHash(body.password);
      user = await user.save()
      console.log(user.username);
      res.sendStatus(200);
    }
    catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  SignIn: async ({ body }, res) => {
    try {
      const user = await User.findOne({$or: [{username: body.signInName}, {email: body.signInName}]});
      res.json(new VisibleUser(user.toObject()));
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  VisibleUser
})

function VisibleUser ({_id, username, email}) {
  this.id = _id;
  this.username = username;
  this.email = email;
}