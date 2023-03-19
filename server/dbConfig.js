require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();


//  mondodb connect
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))

module.exports = mongoose;