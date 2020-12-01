const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    maxlength: 250
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: {
      select: "username"
    }
  },
  date: {
    type: mongoose.SchemaTypes.Date,
    default: () => Date.now()
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    autopopulate: true
  }]
})

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: mongoose.SchemaTypes.Date,
    default: () => Date.now()
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    autopopulate: true
  }]
})

PostSchema.plugin(require('mongoose-autopopulate'));
CommentSchema.plugin(require('mongoose-autopopulate'));

const Post = mongoose.model('Post', PostSchema);
const Comment = mongoose.model('Comment', CommentSchema);

  module.exports = {
    Post,
    Comment
  };