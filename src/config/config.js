const { database, username, password, host, dialect } = require('./nodenv');

module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: dialect
  }
};
