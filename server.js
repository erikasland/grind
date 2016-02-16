var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret: 'sudomonster'}));
var path = require('path');
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, '/client')))
app.use(bodyParser.json());
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8000);