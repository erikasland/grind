var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js')
require('./server/config/routes.js')
app.listen(8000)