const express = require('express');

const router = express.Router();
const {handleGenerateNewShortUrl, handleGoToRedirectedUrl} = require('../controllers/urlController');

//handling the post request
router.post('/', handleGenerateNewShortUrl);

//handling the get request
router.get('/:id', handleGoToRedirectedUrl);

module.exports = router;