const User = require('../models/userModel');

async function handleUserSignUp (req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name: name,
        email: email,
        password: password,
    });

    return res.status(200);
}

module.exports = {
    handleUserSignUp,
}