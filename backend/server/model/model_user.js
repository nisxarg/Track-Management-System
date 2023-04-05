const mongoose = require('mongoose')

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
    }

}) 





//creating collection
const userdb = mongoose.model('userdb', user_schema);  //(<collectionname>, <collectionshema>)

module.exports = userdb;
