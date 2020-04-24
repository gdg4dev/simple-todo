const express = require('express'),
    router = express.Router(),
    rootHelper = require('./helpers/root-helper'),
    paramsHelper = require('./helpers/params-helper')

router
    .route('/')
    .get(rootHelper.listAll)
    .post(rootHelper.create)


router
    .route('/:todoId')
    .get(paramsHelper.search)
    .put(paramsHelper.update)
    .delete(paramsHelper.remove)

module.exports = router