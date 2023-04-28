const mongoose = require('mongoose')

var uvtrack_schema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    track_name: {
        type: String,
        require: true
    },
    track_year:{
        type: String,
        require: true
    },
    start_date:{
        type: Date,
        require: true       
    }
})

//creating collection
const uvtrackdb = mongoose.model('uvtrackdb', uvtrack_schema);  //(<collectionname>, <collectionshema>)

module.exports = uvtrackdb;