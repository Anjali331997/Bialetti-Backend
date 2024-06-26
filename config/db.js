const mongoose = require('mongoose');
require("dotenv").config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}
module.exports = { connectToDatabase };
