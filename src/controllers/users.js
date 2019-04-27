const bcrypt        =   require('bcrypt');
const jwt           =   require('jsonwebtoken');
const users         =   require('../models').users;
const { secret }    =   require('../config/nodenv');


const BCRYPT_SALT_ROUNDS = 12;

const controllers = {
    // creates new account
    register(req, res, next) {
        // first check if an account exists with the provided email
        users
            .findOne({
                where: {
                    email: req.body.email,
                }
            })
            .then(user => {
                if (user) {
                    // if so, notify user that an account already exists
                    res.status(409).send('Account already exists');
                } else {
                    // if not, create new account
                    bcrypt
                        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
                        .then(hash => {
                            users
                                .create({
                                    first_name      :   req.body.first_name,
                                    last_name       :   req.body.last_name,
                                    email           :   req.body.email,
                                    password_hash   :   hash
                                })
                                .then(user => {
                                    res.status(201).send('Account created');
                                });
                        });
                }
            });
    },
    // logs in user
    login(req, res, next) {
        // first check if an account exists with the provided email
        users.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(user => {
            if (!user) {
                // if not, notify the user
                res.status(401).send('Incorrect email credential');
            } else {
                // if yes, proceed to compare password against hash
                bcrypt
                    .compare(req.body.password, user.password_hash)
                    .then(result => {
                        if (!result) {
                            // now, notify user if the provided password is incorrect
                            res.status(401).send('Incorrect password');
                        } else {
                            // else, sign and submit jwt token along user information
                            res.status(200).json({
                                user: {
                                    first_name: user.dataValues.first_name,
                                    last_name: user.dataValues.last_name,
                                    email: user.dataValues.email,
                                },
                                token: jwt.sign({ id: user.id }, secret),
                            });
                        }
                    });
            }
        });
    },
};

module.exports = controllers;
