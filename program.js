// STYLISH CSS Exercise 5 of 8

//Load and activate express module
const express = require('express'),
app = express();

//Load and activate stylus middleware
app.use(require('stylus').middleware(process.argv[3]));

//Serve static HTML files
app.use(express.static(process.argv[3]));

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
