const mongoose = require('mongoose')

var track_schema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: true
    },
    year:{
        type: String,
        required: true,
    },
    introduction:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    submission_format:{
        type: String,
        required: true
    },
    evalution_criteria:{
        type: String,
        required: true        
    }

}) 

//creating collection
const trackdb = mongoose.model('trackdb', track_schema);  //(<collectionname>, <collectionshema>)

module.exports = trackdb;