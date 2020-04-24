const promiseHelper = require('./promise-helper'),
    sendData = promiseHelper.sendData,
    catchHandler = promiseHelper.catchHandler,
    db = require('../../models')

exports.listAll = (req, res) => {
    db.Todo.find()
        .then((d) => { sendData(d, res, 200) })
        .catch((err) => { catchHandler(err, res) })
}

exports.create = (req, res) => {
    db.Todo.create({
            name: req.body.name
        })
        .then((d) => { sendData(d, res, 201) })
        .catch((err) => { catchHandler(err, res) })
}
module.exports = exports