const express = require("express")
const app = express();
const cors = require('cors')


//middlewares
app.use(cors());
app.use(express.json());


const PORT=8000;
app.listen(PORT, ()=> {
    console.log(`listening to http://localhost:${PORT}`);
})
