const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
// connecting to the database
mongoose.connect
(process.env.MONGO_URL).then(() => console.log("Mongodb database connected successfully")).catch((e) => {
    console.log(e)

});

app.listen(3000, () =>{
    console.log("Backend sevice is listening on port 3000 ")

});