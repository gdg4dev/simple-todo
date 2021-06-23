require('dotenv').config();
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 2500,
    todoRoutes = require('./routes/todos'),
    bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.use('/apis/todos', todoRoutes)

app.listen(PORT, () => {
    console.log('server started at: http://127.0.0.1:' + PORT)
})