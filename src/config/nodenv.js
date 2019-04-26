const dotenv = require('dotenv');


dotenv.config();

// export environment variables
module.exports = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
};
