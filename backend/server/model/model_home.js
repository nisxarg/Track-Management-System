const mongoose = require('mongoose')

var home_schema = new mongoose.Schema({

    year:{
        type: String,
        required: true,
        unique: true
    },
    img:{
        type: String,
        required: true,
    },
    WelcomeContent:{
        title :{
            type : String,
            required: true
        },
        content :{
            type : String,
            required: true
        },
   
    },
    content:{
        keyNoteSpeakers : {
            title : {
                type : String,
                required: true
            },
            list : [{
                text : {
                    type : String,
                    required: true
                },
                link : {
                    type : String,
                    required: true
                }
                
            }],
        },
        invitedSpeakers : {
            title : {
                type : String,
                required: true
            },
            list : [{
                text : {
                    type : String,
                    required: true
                },
                link : {
                    type : String,
                    required: true
                }
                
            }],
        },
        tracks : {
            title : {
                type : String,
                required: true
            },
            list : [{
                text : {
                    type : String,
                    required: true
                },
                link : {
                    type : String,
                    required: true
                }
                
            }],
        },
        tutorials : {
            title : {
                type : String,
                required: true
            },
            list : [{
                text : {
                    type : String,
                    required: true
                },
                link : {
                    type : String,
                    required: true
                }
                
            }],
        }
    },

}) 

//creating collection
const homedb = mongoose.model('homedb', home_schema);  //(<collectionname>, <collectionshema>)

module.exports = homedb;