const { Post } = require('../models')

module.exports({
  Create: async ({ body }, res) => {
    try {
      const post = await Post.create(body);
      res.send(post._id)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  Get: async ({params: {id}}, res) => {
    try {
      const post = await Post.findById(id);
      res.json(post.toObject());
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  Update: async ({params: {id}, body}, res) => {
    try {
      const post = await Post.findByIdAndUpdate(id, body, {new: true});
      res.send(post._id)
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  Delete: async ({params: {id}}, res) => {
    try {
      await Post.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
})