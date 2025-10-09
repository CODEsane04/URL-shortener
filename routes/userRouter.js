const express = require('express');
const router = express.Router();

const { handleUserSignUp } = require('../controllers/userController')

router.post('/', handleUserSignUp);

module.exports = router;