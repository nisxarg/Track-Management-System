const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var team_schema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
    },
    track_name:{
        type: String,
        required: true,
    },
    track_year:{
        type: String,
        required: true,
    },
    team_password: {
        type: String,
        required: true
    },
    teammate_1: {
        type: String,
        required: true,
    },
    teammate_2: {
        type: String,
    },
    teammate_3: {
        type: String,
    }
})

team_schema.pre('save',async function() {
    try {
        const salt= await(bcrypt.genSalt(10));
        const hashPass=await bcrypt.hash(this.team_password,salt);
        this.team_password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});



//creating collection
const teamdb = mongoose.model('teamdb', team_schema);  //(<collectionname>, <collectionshema>)

module.exports = teamdb;