var express = require('express');
var bb = require('express-busboy');
var cors = require('cors');
var app = express();
var watch = require('node-watch');
var sass = require('node-sass');

app.env = 'local';

// Allows for CORS requests locally
app.use(cors());

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
app.listen(process.env.PORT || 3000);