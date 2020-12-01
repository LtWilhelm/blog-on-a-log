const { VisibleUser } = require("../controllers/User");
const { User } = require("../models");

async function populateComment(comment) {
  comment.user = new VisibleUser((await User.findById(comment.user)).toObject());

  for (let i = 0; i < comment.replies.length; i++) {
    comment.replies[i] = await populateComment(reply);
  }
  return comment;
}
module.exports = async function populateComments(comments) {
  for (let i = 0; i < comments.length; i++) {
    comments[i] = await populateComment(comments[i]);
  }
  return comments;
}
