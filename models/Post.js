const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    maxlength: 250
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: mongoose.SchemaTypes.Date,
    default: () => Date.now()
  }
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
  comments: [CommentSchema]
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;