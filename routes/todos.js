const express = require('express')
const router = express.Router()
const db = require('../models')

const catchHandler = (err, res) => {
    console.log(err)
    res.status(500).send({
        'error': 'Something Went Wrong'
    })
}

const sendData = (data, res, statusCode) => {
    statusCode ? res.status(statusCode).send(data) : res.send(data)
}

router.get('/', (req, res) => {
    db.Todo.find()
        .then((d) => { sendData(d, res, 200) })
        .catch((err) => { catchHandler(err, res) })
})

router.post('/', (req, res) => {
    db.Todo.create({
            name: req.body.name
        })
        .then((d) => { sendData(d, res, 201) })
        .catch((err) => { catchHandler(err, res) })
})

router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then((d) => { sendData(d, res, 200) })
        .catch((err) => { catchHandler(err, res) })
})

module.exports = router