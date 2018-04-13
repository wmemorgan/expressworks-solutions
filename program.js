// PARAM PAM PAM Exercise 6 of 8

//Load and activate express module
const express = require('express'),
app = express();

app.listen(process.argv[2])

/*-------NOTES----------
1. Load and activate express server
PUT /message/526aa677a8ceb64569c9d4fb

2. Load and activate crypto module
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')

3. Extract parameters from within the request handlers
app.put('/path/:NAME', function(req, res){...});

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