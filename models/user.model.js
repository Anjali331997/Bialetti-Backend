const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors');
const app = express();
app.use(cors({
    origin: "*"
}))

const UserShema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: Array, default: [] },
    order: { type: Array, default: [] },
},
    {
        timestamps: true

    })

const UserModel = mongoose.model('user', UserShema)

module.exports = { UserModel }