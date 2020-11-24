const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true }).then(() => console.log('connected to mongodb'))

module.exports = {
  User: require('./User'),
  Post: require('./Post')
}