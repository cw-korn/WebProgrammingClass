var express = require('express')
var app = express()

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    console.log('CB2')
    res.send('Hello from C!')
  }
  
  app.get('/example/c', [cb0, cb1, cb2])

  app.listen(8081)

  //127.0.0.1:8081/example/c/