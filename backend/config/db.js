

var db = {
  'secret':'my secret',
  'database': process.env.NODE_ENV == 'test' ? 'mongodb://localhost/projet-api-test' : 'mongodb://localhost/projet-api'
  };

  module.exports = db;
