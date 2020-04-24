const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://127.0.0.1/todo-api-1')
mongoose.Promise = Promise;
module.exports.Todo = require('./todo')