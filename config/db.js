const mongoose = require('mongoose')
require("dotenv").config()


const connection=mongoose.connect('mongodb+srv://anjaliap3march1997:anjali03031997ap@cluster0.qw0epzc.mongodb.net/bialetti_backend')

module.exports ={connection}