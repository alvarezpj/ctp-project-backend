const dotenv = require('dotenv');
dotenv.config();

// export environment variables
module.exports = {
    node_env:   process.env.NODE_ENV,
    port:       process.env.PORT,
    // database variables
    database:   process.env.DB_NAME,
    username:   process.env.DB_USER,
    password:   process.env.DB_PASS,
    host:       process.env.DB_HOST,
    dialect:    process.env.DB_TYPE,
};
