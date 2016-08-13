var express = require('express');
var bb = require('express-busboy');
var app = express();

app.env = 'prod';

// Busboy options
bb.extend(app, {
    upload: false,
    path: './tmp'
});

// Web Server Directory
app.use(express.static(__dirname + '/app'));

// API Endpoints
var routes = require("./routes.js")(app);

// Web server
app.listen(process.env.PORT || 8080);