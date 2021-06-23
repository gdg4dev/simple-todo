const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect(process.env.MONGO_URL.toString())
mongoose.Promise = Promise;
module.exports.Todo = require('./todo')