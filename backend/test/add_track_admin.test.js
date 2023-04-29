const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/add_track_admin', () => {
    test('should return status 200 for track added to track db added by admin', async () => {
        const req = {
            body: {
                    "name_code": "track_vyom",
                    "year": "2022",
                    "sidebar": [
                      {
                        "title": "Home",
                        "links": [
                          {
                            "name": "Home"
                          }
                        ]
                      }
                    ],
                    "importantDates": {
                      "title": "Contest Duration",
                      "dates": [
                        {
                          "date": "22/5/2023",
                          "event": "Start  the contest"
                        }
                      ]
                    },
                    "content": {
                      "introduction": {
                        "title": "Introduction",
                        "content": "This is content of Introduction."
                      },
                      "TaskDescription": {
                        "title": "Task Description",
                        "content": "This is content of Task Description"
                      },
                      "corpus": {
                        "title": "Training Corpus",
                        "content": "Content of Training Corpus"
                      },
                      "registration": {
                        "title": "Registration",
                        "content": "Content of Registration"
                      },
                      "submission": {
                        "title": "Submission Format",
                        "content": "Content of Submission."
                      },
                      "evaluation": {
                        "title": "Evaluation ",
                        "content": "Content of Evaluation"
                      }
                    },
                    "tag": [
                      {
                        "tagname": "ML"
                      }
                    ]
            }
        };
        const res = await request(baseURL).post('/api/add_track_admin').send(req.body);
        expect(res.status).toEqual(200);
    }),
    test('should return status 500 for same track name error', async () => {
        const req = {
            body: {
                    "name_code": "track_vyom",
                    "year": "2022",
                    "sidebar": [
                      {
                        "title": "Home",
                        "links": [
                          {
                            "name": "Home"
                          }
                        ]
                      }
                    ],
                    "importantDates": {
                      "title": "Contest Duration",
                      "dates": [
                        {
                          "date": "22/5/2023",
                          "event": "Start  the contest"
                        }
                      ]
                    },
                    "content": {
                      "introduction": {
                        "title": "Introduction",
                        "content": "This is content of Introduction."
                      },
                      "TaskDescription": {
                        "title": "Task Description",
                        "content": "This is content of Task Description"
                      },
                      "corpus": {
                        "title": "Training Corpus",
                        "content": "Content of Training Corpus"
                      },
                      "registration": {
                        "title": "Registration",
                        "content": "Content of Registration"
                      },
                      "submission": {
                        "title": "Submission Format",
                        "content": "Content of Submission."
                      },
                      "evaluation": {
                        "title": "Evaluation ",
                        "content": "Content of Evaluation"
                      }
                    },
                    "tag": [
                      {
                        "tagname": "ML"
                      }
                    ]
            }
        };
        const res = await request(baseURL).post('/api/add_track_admin').send(req.body);
        expect(res.status).toEqual(500);
    })
})