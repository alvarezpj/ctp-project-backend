const axios = require('axios');
const env = require('../config/nodenv').node_env;
const { meetup_api_key } = require('../config/nodenv');


const middleware = {
    getAllEvents(req, res, next) {
        const { limit, keywords } = req.body;

        axios
            .get(`https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&page=${limit}&text=${keywords}&key=${meetup_api_key}`)
            .then(response => {
                // handle success
                return res.status(200).json({ status: 200, response: response.data })
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {
                // always executed
            });

        // make a request to api route /api/meetup
        // take env from process.env.meetup
        // make the request to meetup using params from req.body
        // return that request to user
        // return res.json({status: 200, url})
    },
    getEvent(req, res, next) {
        const { id, urlname } = req.body;

        axios
            .get(`https://api.meetup.com/${urlname}/events/${id}?&sign=true&photo-host=public&key=${meetup_api_key}`)
            .then(response => {
                // handle success
                return res.status(200).json({ status: 200, response: response.data })
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    },
    getEventPhoto(req,res,next){
        const {urlname} = req.body;
        axios
            .get(`https://api.meetup.com/${urlname}/photo_albums?&sign=true&photo-host=public&page=20&key=${meetup_api_key}`)
            .then(response => {
                // handle success
                return res.status(200).json({ status: 200, response: response.data })
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }
}

module.exports = middleware;
