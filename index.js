// Modules
var express = require(`express`);
var bodyParser = require(`body-parser`);
var logger = require(`morgan`);

// Local config modules
var db = require(`./config/connection.js`);

// Routing Modules
var index = require(`./routes/index.js`);
var api = require(`./routes/api.js`);

// Express Port Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(`/api`, api);
app.use(`/`, index);

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});