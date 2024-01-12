// importing mongoose
const mongoose = require('mongoose');

// define the schema for database
const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 99
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});


/**
 * 
 * employee is the collection name here in this case
 * EmployeeSchema we are exporting from here
 */
module.exports = mongoose.model('employee', EmployeeSchema);