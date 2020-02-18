const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/Url');

router.post('/shorten', async (req, res) => {
    const {longUrl} = req.body;
    
    const baseUrl = "http://localhost:5000";

    if(!validUrl.isUri(baseUrl)){
        res.status(401).json("Invalid baseUrl");
    }

    const urlCode = shortid.generate();

    if(validUrl.isUri(longUrl)){
        try {
            let url = await Url.findOne({longUrl});
            if(url) {
                res.json(url);
            }
            else{
                const shortUrl = baseUrl +'/'+ urlCode;
           
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                await url.save();
                res.json(url);
            }
        } catch(err) {
            console.log(err);
            res.status(500).json('Server error');
        }
    }
    else{
        res.status(401).json('Invalid long Url');
    }
})
module.exports = router;
