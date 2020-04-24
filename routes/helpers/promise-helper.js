exports.catchHandler = (err, res) => {
    console.log(err)
    res.status(500).send({
        'error': 'Something Went Wrong'
    })
}

exports.sendData = (data, res, statusCode) => {
    statusCode ? res.status(statusCode).send(data) : res.send(data)
}

module.exports = exports