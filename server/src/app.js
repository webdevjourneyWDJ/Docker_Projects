const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/posts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      },
      {
        title: "Docker",
        description: "Docker is awesome!"
      },
      {
        title: "WDJ",
        description: "WDJ is aight"
      }]
    )
  })

app.listen(process.env.PORT || 8081)