const express           =   require('express');
const morgan            =   require('morgan');
const bodyParser        =   require('body-parser');
const passport          =   require('passport');
const { port }          =   require('./config/nodenv');
const register          =   require('./controllers/users').register;
const login             =   require('./controllers/users').login;
const strategy          =   require('./middleware/authentication');
const fetchFromApi      =   require('./middleware/meetup');


const app = express();

// set up middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
passport.use(strategy);
app.use(passport.initialize());

// set up application routes
app.get('/api/meetup', fetchFromApi);
app.post('/api/signup', register);
app.post('/api/login', login);

// example of how to authenticate a request with passport
app.get('/secretroute', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send('you can see this!');
});

// catch-all route
app.get('/*', (req, res, next) => {
    res.status(200).json({ message: 'Serving requests'});
});

// start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
