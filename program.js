// STYLISH CSS Exercise 5 of 8

//Load and activate express module
const express = require('express'),
app = express();

//Load and activate stylus middleware
app.use(require('stylus').middleware(process.argv[3]));

//Serve static HTML files
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])

