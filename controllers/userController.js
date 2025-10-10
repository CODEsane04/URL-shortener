const User = require('../models/userModel');

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
    }
    return res.status(200).json({message: "logged in succesfully"});
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}