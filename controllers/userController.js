const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/authService')

async function handleUserSignUp (req, res) {

    console.log("recieved a signup request");
    
    const { name, email, password } = req.body;
    await User.create({
        name: name,
        email: email,
        password: password,
    });

    console.log("saved user info in db");

    return res.status(200).json({message: "user sign up was successfull"});
}

//handle login

const handleUserLogin = async (req, res)=> {
    const {email, password} = req.body;
    console.log("recieved a login req");
    const user = await User.findOne({email, password});

    if (!user) {
        res.status(400).json({message : "no such user exists"});
    };
//----- auth start
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId, {
        httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript (good security)
        sameSite: 'lax' // Be explicit, even if it's the default
    });
//----- auth end
    console.log(sessionId);
    return res.status(200).json({message: "logged in succesfully"});
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}