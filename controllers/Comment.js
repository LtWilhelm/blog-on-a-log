const { Post: {Post, Comment}, User } = require("../models");
const populateComments = require("../utils/populateComment");
const { VisibleUser } = require('./User');

module.exports = {
  Create: async ({ body, params: { id } }, res) => {
    try {
      let postOrComment = await Post.findById(id);
      if (!postOrComment) postOrComment = await Comment.findById(id);
      const comment = await Comment.create(body);

      postOrComment.comments.push(comment);
      postOrComment = (await postOrComment.save()).toObject();

      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  Update: async (req, res) => {
    try {

    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  Delete: async (req, res) => {
    try {

    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
}
