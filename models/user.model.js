
const mongoose = require('mongoose')

const UserShema = new mongoose.Schema({

    fname: String,
    lname: String,
    email: String,
    password: String,

},
    {
        timestamps: true

    })

const UserModel = mongoose.model('signup', UserShema)

module.exports = { UserModel }