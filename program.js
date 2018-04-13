// WHAT'S IN QUERY Exercise 7 of 8

//Load and activate express module
const express = require('express'),
app = express();

//Create a route in the GET '/search' directory
app.get('/search', (req, res) => {
    //Extract query string parameters and 
    //return in JSON format
    res.send(req.query);
})

app.listen(process.argv[2])

/*-------NOTES----------
Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.

1. Load and activate express server

2. Create a route in the GET '/search' directory

3. Extract query string parameters use:
    req.query.NAME
    
4. Return the string parameters in JSON format. We can use:
    res.send(object)
*/