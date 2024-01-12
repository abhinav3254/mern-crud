const mongoose = require('mongoose');

// url for mongodb
const url = 'mongodb://localhost:27017/employees';

// connecting with mongoose
mongoose.connect(url);


// storing connection in db variable
const db = mongoose.connection;

// if some kind of issue is there then this method will be called
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

// if connected to database then this method will be called
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

// exporting db from here 
module.exports = db;