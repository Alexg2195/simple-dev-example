var mongoose = require('mongoose');

// Heroku MongoLab setup for Heroku deployment || Change BD name below for testing <--!!!!!
mongoose.connect(process.env.MONGOLAB_URI || `mongodb://localhost/YOUR_DB_NAME_HERE`);

module.exports = mongoose.connection;