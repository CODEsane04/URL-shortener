const { nanoid } = require('nanoid');
const URL = require('../models/urlModel');

async function handleGenerateNewShortUrl(req, res) {
    console.log("recieved a post request");
    
    const long_url = `http://${req.body.long_url}`;

    if (!long_url) {
        return res.status(400).json({message: "no long url reecieved"});
    }

    console.log("successfully recieved the long_url");
    
    const UID = nanoid(6);
    const now = Date.now();

    try {
        await URL.create({
            shortId: UID,
            redirectUrl: long_url,
            visitHistory: [{ timestamp: now }], 
        });

        const short_url = `http://localhost:8000/${UID}`;
        return res.status(201).json({short_url: short_url});

    } catch (error) {
        return res.status(500).json({message: "failed to shorten the url"});
    }
}

async function handleGoToRedirectedUrl(req, res) {
    console.log("recieved a get request");
    
    const UID = req.params.id;

    if (!UID) {
        return res.status(400).json({message: "no valid ID recieved"});
    }

    console.log("succesfuly got the UID from url", UID);

    try {

        const req_url_data = await URL.findOne({shortId: UID});

        if (!req_url_data) {
            return res.status(500).json({message: "no short url found"});
        }

        req_url_data.visitHistory.push({ timestamp: Date.now() });

        await req_url_data.save(); 

        const redirect_link = req_url_data.redirectUrl;

        return res.status(302).redirect(redirect_link);
    } catch (error) {
        return res.status(500).json({message: "failed to redirect"});
    }
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGoToRedirectedUrl,

}