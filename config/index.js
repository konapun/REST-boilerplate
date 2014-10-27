var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    app: {
      name: 'rest-api',
      version: '0.0.1'
    },
    database: {
      connectionString: 'mongodb://localhost:27017/db_name'
    },
    port: process.env.PORT || 8080
  }
};

module.exports = config[env];
