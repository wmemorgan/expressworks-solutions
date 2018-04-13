// JSON ME Exercise 8 of 8

//Load and activate express module
const express = require('express'),
app = express(),
//Load and activate the fs module
fs = require('fs');


app.listen(process.argv[2])

/*-------NOTES----------
Write a server that reads a file, parses it to JSON and outputs the content
to the user.

1. Load and activate express server

2. Load and activate the fs module

3. Create a route in the GET '/books' directory

4. Read the file using the fs module. We can use:
    fs.readFile(process.argv[3], callback)
    
5. Parse the file and return the content in JSON format. We can use:
    object = JSON.parse(content)
*/


/*--------Previous Solution------------
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


*/