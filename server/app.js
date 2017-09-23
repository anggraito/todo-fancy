const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      morgan = require('morgan'),
      axios = require('axios')
const app = express();
const port = process.env.PORT || 3000

var url = 'mongodb://localhost/catlist'
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const user = require('./routes/user'),
      todo = require('./routes/todo')

app.use('/api', user)
app.use('/api/todos', todo)

app.listen(port);
console.log('Your presentation is running on http://localhost:' + port);