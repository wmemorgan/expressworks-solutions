// STATIC Exercise 2 of 8

const express = require('express')
const app = express()
app.get('/home', (req, res) => {
  res.end('Hello World!')
})

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
