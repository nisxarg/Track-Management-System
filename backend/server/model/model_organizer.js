const mongoose = require('mongoose')

var organizer_schema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    phone_no:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }

}) 

//creating collection
const organizerdb = mongoose.model('organizerdb', organizer_schema);  //(<collectionname>, <collectionshema>)

module.exports = organizerdb;