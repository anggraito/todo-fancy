const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      morgan = require('morgan'),
      axios = require('axios')
const app = express();
const port = process.env.PORT || 3000

// var url = 'mongodb://localhost/catlist'
var url = 'mongodb://anggraito:anggi123@mydb-shard-00-00-vv98n.mongodb.net:27017,mydb-shard-00-01-vv98n.mongodb.net:27017,mydb-shard-00-02-vv98n.mongodb.net:27017/test?ssl=true&replicaSet=mydb-shard-0&authSource=admin'
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

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port);
console.log('Your presentation is running on http://localhost:' + port);