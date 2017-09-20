var mongoose = require('mongoose');
//var dburl = 'mongodb://' + process.env.IP + ':27017/CDFinance';
var dburl = 'mongodb://localhost:27017/CDFinanace';
mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

process.on('SIGINT', function () {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination (SIGINT)");
    process.exit(0);
  });
});

process.on('SIGTERM', function () {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination (SIGTERM)");
    process.exit(0);
  });
});

<<<<<<< HEAD
=======
process.once('SIGUSR2', function() {
>>>>>>> b937f04f3568b40954321fbfc3cac87cb0c8f6ce
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through app termination (SIGUSR2)');
    process.kill(process.pid, 'SIGUSR2');
  });
});

require('./stocks.model.js');
require('./users.model.js');
