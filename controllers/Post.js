const { Post: {Post}, User } = require('../models');
const populateComments = require('../utils/populateComment')

module.exports = ({
  Create: async ({ body, params: {id} }, res) => {
    try {
      const user = await User.findById(id);
      const post = await Post.create(body);
      user.blogPosts.push(post._id);
      await user.save();
      res.send(post._id)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  Get: async ({params: {id}}, res) => {
    try {
      const post = (await Post.findById(id)).toObject();
      console.log(post.comments);
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  GetPage: async ({params: {id}, query: {p}}, res) => {
    try {
      console.log('hit', p);
      const posts = await Post.find({}, {}, {
        limit: 10,
        skip: p * 10,
        autopopulate: false
      });
      res.json(posts);
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