const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    todoRoutes = require('./routes/todos'),
    bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/apis/todos', todoRoutes)

app.listen(PORT, () => {
    console.log('server started at: http://127.0.0.1:' + PORT)
})