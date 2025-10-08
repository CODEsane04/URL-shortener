const express = require("express")
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/urlRouter')

const PORT=8000;
//connect to mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/url')
    .then(()=> {
        console.log("connected to mongoDB");
        app.listen(PORT, ()=> {
            console.log(`listening to http://localhost:${PORT}`);
        })
    })
    .catch((err)=> {
        console.log("error connecting to mongoDB", err);
    })

//middlewares
app.use(cors());
app.use(express.json());

app.use('/', urlRoutes);




