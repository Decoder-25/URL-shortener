const express = require('express');
const { connectToMongoDb } = require('./config/db');
const urlRoute = require('./routes/url');


const app = express();
const PORT = 8001;

//database connection
connectToMongoDb("mongodb://127.0.0.1:27017/short_url").then(() => 
    console.log("mongodb connected")
)

//middleware
app.use(express.json());

//routes
app.use('/url', urlRoute);

//server
app.listen(PORT, () => console.log(`server started at ${PORT}`));