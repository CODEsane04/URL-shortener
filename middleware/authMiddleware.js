const {getUser} = require('../service/authService');

function restrictLoggedInUserOnly (req, res, next) {
    const sessionId = req.cookies?.uid;

    if (!sessionId) {
        return res.status(401).json({message: "unauthorized, please login"});
    }

    const user = getUser(sessionId);

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized: Invalid session' });
    }

    //if user is found, attach it to the request object
    req.user = user;

    next();
}

module.exports = {
    restrictLoggedInUserOnly,
}