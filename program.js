// HELLO WORLD! Exercise 1 of 8
// My Solution

const express = require('express')
const app = express()
app.get('/home', (req, res) => {
  res.end('Hello World!')
})
app.listen(process.argv[2])
