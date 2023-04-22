const mongoose = require('mongoose')

var track_schema = new mongoose.Schema({

    name_code: {
        type: String,
        require: true,
        unique : true
    },
    sidebar: {
        title: {
            type: String,
            required: true,
        },
        links: [{
            name: {
                type: String,
                required: true
            },

        }]
    },
    importantDates: {
        title: {
            type: String,
            required: true
        },
        dates: [{
            date: {
                type: String,
                required: true
            },
            event: {
                type: String,
                required: true
            }
        }]
    },

    content: {
        introduction: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        TaskDescription: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        corpus: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        registration: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        submission: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        evaluation: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }
    }
})

//creating collection
const trackdb = mongoose.model('trackdb', track_schema);  //(<collectionname>, <collectionshema>)

module.exports = trackdb;