const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  blogPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
})

UserSchema.methods.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
UserSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password);
} 

const User = mongoose.model("User", UserSchema);

module.exports = User;