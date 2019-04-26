const express = require('express');
const { port } = require('./config/nodenv');


const app = express();

// catch-all route
app.get('/*',
        (req, res, next) => {
            res.status(200).json({ message: 'Serving requests '});
        }
);

// start server
app.listen(port,
           () => {
                console.log(`Listening on port ${port}`);
           }
);
