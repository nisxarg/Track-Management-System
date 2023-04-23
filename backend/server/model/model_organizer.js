const mongoose = require('mongoose')

var organizer_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    track_name:{
        type: String,
        required: true
    },
    start_date:{
        type: Date,
        required: true
    },
    end_date:{
        type: Date,
        required: true
    },
    resume_link:{
        type: String,
        required: true
    }

}) 

//creating collection
const organizerdb = mongoose.model('organizerdb', organizer_schema);  //(<collectionname>, <collectionshema>)

module.exports = organizerdb;