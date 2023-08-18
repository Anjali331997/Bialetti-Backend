const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors');
const app = express();
app.use(cors({
    origin: "*"
}))

const UserShema = new mongoose.Schema({

    fname: String,
    lname: String,
    email: String,
    password: String,

},
    {
        timestamps: true

    })

const UserModel = mongoose.model('user', UserShema)

module.exports = { UserModel }