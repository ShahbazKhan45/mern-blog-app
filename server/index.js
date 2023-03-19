// Create Server
const cors = require('cors');
var express = require('express');
var app = express();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const db = require('./dbConfig');
const articlesRoute = require('./routes/articleController')
var port = process.env.port;

////////Initialize the middleware
////////Response in json formate
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// const articlesInfo = {
//     "learn-react": {
//         comments: [],
//     },
//     "learn-node": {
//         comments: [],
//     },
//     "my-thoughts-on-learning-react": {
//         comments: [],
//     }
// }

app.use(cors());

app.get('/test', (req, res) => {
    res.send("Server Is Runing")
})

app.use('/article', articlesRoute)



app.listen(port, () => console.log(`Server Started at Port ${port}`));
