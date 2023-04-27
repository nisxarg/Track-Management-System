const mongoose = require('mongoose')

var track_schema = new mongoose.Schema({

    name_code: {
        type: String,
        require: true
    },
    year:{
        type: String,
        require: true
    },
    tag : [{
        tagname:{
            type : String
        }
    }],
    sidebar: [{
        title: {
            type: String
        },
        links: [{
            name: {
                type: String
            },
        }]
    }],
    importantDates: {
        title: {
            type: String
        },
        dates: [{
            date: {
                type: String
            },
            event: {
                type: String
            }
        }]
    },

    content: {
        introduction: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
        TaskDescription: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
        corpus: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
        registration: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
        submission: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
        evaluation: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        }
    }
})
track_schema.index({ name_code: 1, year: 1 }, { unique: true });

//creating collection
const trackdb = mongoose.model('trackdb', track_schema);  //(<collectionname>, <collectionshema>)

module.exports = trackdb;