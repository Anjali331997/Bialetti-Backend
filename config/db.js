const mongoose = require('mongoose')
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors({
    origin: "*"
}))
require("dotenv").config()


const connection=mongoose.connect(process.env.MONGO_URL)

module.exports ={connection}
