const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var user_schema = new mongoose.Schema({
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
    },
    tracks : [{
        track_name:{
            type:String,
            //required: true
        },
        track_year:{
            type:String,
            //required: true
        }
    }]
}) 

user_schema.pre('save',async function() {
    try {
        const salt= await(bcrypt.genSalt(10));
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});



//creating collection
const userdb = mongoose.model('userdb', user_schema);  //(<collectionname>, <collectionshema>)

module.exports = userdb;
