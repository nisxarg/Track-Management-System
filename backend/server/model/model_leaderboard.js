const mongoose = require('mongoose')

var leaderboard_schema = new mongoose.Schema({

    track_year : {
        type: String,
        required: true,
    },
    track_name : {
        type: String,
        required: true,
    },
    team_and_score : [{
        team_name : {
            type: String,
            required: true
        },
        team_score : {
            type: Number ,
            required: true,
            default : 0
        },
    }]


}) 

//creating collection
const leaderdb = mongoose.model('leaderdb', home_schema);  //(<collectionname>, <collectionshema>)
module.exports = leaderdb;