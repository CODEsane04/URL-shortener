const express = require('express');

const router = express.Router();
const {handleGenerateNewShortUrl, handleGoToRedirectedUrl, handleLoadAllLinks} = require('../controllers/urlController');

//handling the post request
router.post('/', handleGenerateNewShortUrl);

//handling the get request to load all the urls
router.get('/links', handleLoadAllLinks);

//handling the get request to redirect to the url
router.get('/:id', handleGoToRedirectedUrl);



module.exports = router;