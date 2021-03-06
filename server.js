var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
// set up a static file server that points to the "client" directory
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

require('./config/mongoose.js');

require('./config/routes.js')(app);

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
})