// STYLISH CSS Exercise 5 of 8

const express = require('express'),
bodyparser = require('body-parser'),
app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
    res.end(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2])

/* NOTES
1.Install stylus module
npm install stylus

2.Activate stylus middleware
app.use(require('stylus').middleware(__dirname + '/public'));

3.Serve static HTML files pointing to a directory path provided by
the parameter process.argv[3]

4.Listen on the port number supplied by process.argv[2].

*/