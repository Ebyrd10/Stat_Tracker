const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//router.get instead of app.get 
router.get('/:platform/:gamertag', async (req, res) => {
    try {
        //include the api key as a header, per tracker.gg's documentation
        const headers = {
        'TRN-Api-Key': process.env.TRACKER_API_KEY
        }
        //destructuring to get params
        const { platform, gamertag} = req.params;

        //a / infront of profile here causes the server error below to fire
        const response = await fetch(`${process.env.TRACKER_API_URL}profile/${platform}/${gamertag}`, {
            headers
        });

        //waits for a response and saves as data
        const data = await response.json();

        //if there is an error on the api side then return a 'profile not found' message on a 404 page
        if(data.errors && data.errors.length > 0) {
            return res.status(404).json({
                message: 'Profile Not Found'
            });
        };

        //sends the client the data as a json
        res.json(data);

    //If there is an error on the server side from this api then respond with a 500 status error
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'server error'
        });
    }
    
});

module.exports = router;