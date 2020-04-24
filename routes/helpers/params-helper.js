const promiseHelper = require('./promise-helper'),
    sendData = promiseHelper.sendData,
    catchHandler = promiseHelper.catchHandler,
    db = require('../../models')

exports.search = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then((d) => { sendData(d, res, 200) })
        .catch((err) => { catchHandler(err, res) })
}
exports.update = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
        .then((d) => { sendData(d, res, 200) })
        .catch((err) => { catchHandler(err, res) })
}

exports.remove = (req, res) => {
    db.Todo.findByIdAndDelete(req.params.todoId)
        .then((d) => { sendData(d, res, 200) })
        .catch((err) => { catchHandler(err, res) })
}

module.exports = exports