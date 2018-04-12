// GOOD OLD FORM Exercise 4 of 8

const express = require('express'),
bodyparser = require('body-parser'),
app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
    res.end(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2])
