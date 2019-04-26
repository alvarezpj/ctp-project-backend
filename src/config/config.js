const { database, username, password } = require('./nodenv');

module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
