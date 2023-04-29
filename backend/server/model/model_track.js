const mongoose = require('mongoose')

var track_schema = new mongoose.Schema({

    name_code: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    tag: [{
        tagname: {
            type: String
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
            type: String,
            default: ""

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
                type: String,
                default: "Titile of Introduction"
            },
            content: {
                type: String,
                default: "Content of Introduction"
            }
        },
        TaskDescription: {
            title: {
                type: String,
                default: "Title of task Description"
            },
            content: {
                type: String,
                default: "content of task description"
            }
        },
        corpus: {
            title: {
                type: String,
                default: "Title of Corpus"
            },
            content: {
                type: String,
                default: "Content of Corpus"
            }
        },
        registration: {
            title: {
                type: String,
                default: "Title of registration"
            },
            content: {
                type: String,
                default: "Content of registration"
            }
        },
        submission: {
            title: {
                type: String,
                default: "Title of submission"
            },
            content: {
                type: String,
                default: "Content of submission"
            }
        },
        evaluation: {
            title: {
                type: String,
                default: "Title of evaluation "
            },
            content: {
                type: String,
                default: "Content of evaluation"
            }
        }
    }
})
track_schema.index({ name_code: 1, year: 1 }, { unique: true });

//creating collection
const trackdb = mongoose.model('trackdb', track_schema);  //(<collectionname>, <collectionshema>)

module.exports = trackdb;