// STYLISH CSS Exercise 5 of 8

const express = require('express'),
app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

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

/* Previous solutions
// HELLO WORLD! Exercise 1 of 8
const express = require('express')
const app = express()

app.set('views', process.argv[3]||path.join(__dirname, 'templates'))
app.set('view engine', 'jade')
app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

// STATIC Exercise 2 of 8

const express = require('express')
const app = express()
app.get('/home', (req, res) => {
  res.end('Hello World!')
})

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])

// JADE Exercise 3 of 8

const express = require('express')
const app = express()

app.set('views', process.argv[3]||path.join(__dirname, 'templates'))
app.set('view engine', 'jade')
app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

// GOOD OLD FORM Exercise 4 of 8

const express = require('express'),
bodyparser = require('body-parser'),
app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
    res.end(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2])

*/