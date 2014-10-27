var express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    config = require('./config');

mongoose.connect(config.database.connectionString);

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(passport.initialize());

var router = express.Router();
routes.register(router);

app.use('/api', router);
app.listen(config.port, function() {
  console.log("Server listening on port " + config.port);
});
