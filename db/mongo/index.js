const mongoose = require('mongoose');

const MONGO_USERNAME = 'test';
const MONGO_PASSWORD = 'test123';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'anything_anywhere';

const connectDB = async () => {
    try{
        var dbURL= `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
        const mongoDB = await mongoose.connect(dbURL);
        console.log("MongoDB successfully connected !!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;