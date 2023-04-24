const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var organizer_schema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
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
    },
    verified:{
        type: Boolean,
        default: false
    }
})

organizer_schema.pre('save',async function() {
    try {
        const salt= await(bcrypt.genSalt(10));
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});


//creating collection
const organizerdb = mongoose.model('organizerdb', organizer_schema);  //(<collectionname>, <collectionshema>)

module.exports = organizerdb;