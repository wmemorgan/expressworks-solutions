// PARAM PAM PAM Exercise 6 of 8

//Load and activate express module
const express = require('express'),
app = express();

app.put('/message/:id', (req, res) => {
    //Extract parameters from within the request handlers
    var id = req.params.id;
   
    //Transform and return the request message ID to SHA1 hash   
    var result = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
     
     res.end(result);
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
    
3.  
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')

*/





/*-------PREVIOUS SOLUTIONS----
//STYLISH CSS Exercise 5 of 8

//Load and activate express module
const express = require('express'),
app = express();

//Load and activate stylus middleware
app.use(require('stylus').middleware(process.argv[3]));

//Serve static HTML files
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])

*/