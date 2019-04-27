const jwtStrategy   =   require('passport-jwt').Strategy;
const extractJwt    =   require('passport-jwt').ExtractJwt;
const { secret }    =   require('../config/nodenv');
const users         =   require('../models').users;


const options = {
    secretOrKey: secret,
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
};

// verify legitimacy of token
const strategy = new jwtStrategy(options, (jwt_payload, done) => {
    // check whether a user exists in database with provided id in token
    return users
        .findByPk(jwt_payload.id)
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Invalid credentials' });
            }

            return done(null, user);
        });
});

module.exports = strategy;
