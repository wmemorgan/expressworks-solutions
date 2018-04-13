// JSON ME Exercise 8 of 8

//Load and activate express module
const express = require('express'),
app = express(),
//Load and activate the fs module
fs = require('fs');

//Create a route in the GET '/books' directory
app.get('/books', (req, res) => {
    //Read the file using the fs module
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err;
        //Parse the file content.
        var content = JSON.parse(data);
        //Return the content in JSON format.
        res.json(content);
    })
    
})

app.listen(process.argv[2])

/*-------NOTES----------
Write a server that reads a file, parses it to JSON and outputs the content
to the user.

1. Load and activate express server (DONE)

2. Load and activate the fs module (DONE)

3. Create a route in the GET '/books' directory (DONE)

4. Read the file using the fs module. We can use: (DONE)
    fs.readFile(process.argv[3], callback)
    
5. Parse the file content. We can use: (DONE)
    object = JSON.parse(content)
    
6. Return the content in JSON format. Respond with: (DONE)
   res.json(content)
*/