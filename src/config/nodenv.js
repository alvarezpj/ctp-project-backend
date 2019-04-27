const dotenv = require('dotenv');
dotenv.config();

// export environment variables
module.exports = {
    node_env        :   process.env.NODE_ENV,
    port            :   process.env.PORT,
    database        :   process.env.DB_NAME,
    username        :   process.env.DB_USER,
    password        :   process.env.DB_PASS,
    secret          :   process.env.JWT_SECRET,
    meetup_api_key  :   process.env.MEETUP_API_KEY,
};
