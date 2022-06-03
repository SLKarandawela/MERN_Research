const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')


const bodyParser = require('body-parser');

const errorHandler = require('./auth/middleware/error');

dotenv.config();
//connecting to the database
mongoose.connect
(process.env.MONGO_URL).then(() => console.log("Mongodb database connected successfully")).catch((e) => {
    console.log(e)

});

app.use(bodyParser.json())

app.use(express.json());

app.use('/api/auth', require('./auth/routes/auth'));
app.use('/api/private', require('./auth/routes/private'));
app.use('/api/panel', require('./panel_member/routes/evaluation'));

//Error Handler (should be the last piece of middleware)
app.use(errorHandler);

app.listen(3000, () =>{
    console.log("Backend sevice is listening on port 3000 ")

});

module.exports = app 
