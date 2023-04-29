const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var admin_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

admin_schema.pre('save',async function() {
    try {
        const salt= await(bcrypt.genSalt(10));
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});



//creating collection
const admindb = mongoose.model('admindb', admin_schema);  //(<collectionname>, <collectionshema>)

module.exports = admindb;