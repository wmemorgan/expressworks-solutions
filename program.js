// HELLO WORLD! Exercise 1 of 8

// const express = require('express')
// const app = express()
// app.get('/home', (req, res) => {
//   res.end('Hello World!')
// })
// app.listen(process.argv[2])

var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2])