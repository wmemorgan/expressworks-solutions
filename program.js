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

app.listen(process.argv[2])

/*-------NOTES----------
Create an Express.js server that processes PUT '/message/:id' requests.

For instance:
    PUT /message/526aa677a8ceb64569c9d4fb

1. Load and activate express server
app.put('/path/:NAME', function(req, res){...});

2. Extract parameters from within the request handlers. 
To extract parameters from within the request handlers, use:
    req.params.NAME
    
3. Transform and return the request message ID to SHA1 hash   
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')

*/
