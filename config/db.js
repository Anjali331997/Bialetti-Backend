const mongoose = require('mongoose')
require("dotenv").config()


const connection=mongoose.connect('mongodb+srv://anjaliap3march1997:anjaliap03031997@cluster0.7jijqcm.mongodb.net/bialetti_data')

module.exports ={connection}