const { nanoid } = require('nanoid');
const URL = require('../models/urlModel');

async function handleGenerateNewShortUrl(req, res) {
    const long_url = req.body.long_url;

    if (!long_url) {
        return res.status(400).json({message: "no long url reecieved"});
    }

    const UID = nanoid(6);
    const now = Date.now();

    try {
        await URL.create({
            shortId: UID,
            redirectUrl: long_url,
            visitHistory: [now],
        });

        const short_url = `http://localhost:8000/:${UID}`;
        return res.status(200).json({short_url: short_url});

    } catch (error) {
        res.status(500).json({message: "failed to shorten the url"});
    }
}