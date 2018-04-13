// WHAT'S IN QUERY Exercise 7 of 8

//Load and activate express module
const express = require('express'),
app = express();

});

app.listen(process.argv[2])

/*-------NOTES----------
Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.

1. Load and activate express server

2. Write a route in the GET '/search' directory

3. Extract query string parameters use:
    req.query.NAME
    
4. Return the string parameters in JSON format. We can use:
    res.send(object)
*/


/*-------Previous Solution-------
// PARAM PAM PAM Exercise 6 of 8

//Load and activate express module
const express = require('express'),
app = express();

app.put('/message/:id', (req, res) => {
    //Extract parameters from within the request handlers
    var id = req.params.id;
   
    //Transform and return the request message ID to SHA1 hash   
    var idHash = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
     
    res.end(idHash);
});
*/