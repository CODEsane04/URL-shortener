const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth')

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

const handleUserLogin = async (req, res)=> {
    const {email, password} = req.body;
    

    const user = await User.findOne({email, password});

    if (!user) {
        res.status(400).json({message : "no such user exists"});
    };

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId);
    return res.status(200).json({message: "logged in succesfully"});
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}