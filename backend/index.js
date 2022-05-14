const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();


//config body parser
const bodyParser = require('body-parser')

//importing topic routers
const topicRoutes = require('./routes/topic.router.js')
const groupRoutes = require('./routes/group.router.js')

// connecting to the database
mongoose.connect
(process.env.MONGO_URL).then(() => console.log("Mongodb database connected successfully")).catch((e) => {
    console.log(e)

});


app.use(bodyParser.json())

app.use('/topic' , topicRoutes)
app.use('/group' , groupRoutes)


app.listen(3000, () =>{
    console.log("Backend sevice is listening on port 3000 ")

});