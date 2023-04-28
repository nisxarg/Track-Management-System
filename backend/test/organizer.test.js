const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/organizer_signup', () => {
    test('should return status 200 for Successful signup', async () => {
        const req = {
            body: {
                    "username":"Vyomxy",
                    "email" : "abc@gmail.com",
                    "password" : "A1_a",
                    "track_list":[
                        {
                            "track_name": "new_track",
                            "start_date": "2023-04-22T20:09:27.848+00:00",
                            "end_date": "2023-04-22T20:09:27.848+00:00"
                        }
                    ],
                    "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 300 for Username already exists', async () => {
        const req = {
            body: {
                "username":"Vyomxy",
                "email" : "abc@gmail.com",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(300);
    });

    test('should return status 400 for enter valid email address', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmailcom",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for enter valid email address', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abcgmail.com",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });
    
    test('should return status 400 for enter valid email address', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmail@com",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });
    
    test('should return status 400 for enter valid email address', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmail@com",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });
    
    test('should return status 400 for Enter Valid Password', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmail@com",
                "password" : "A1_",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter Valid Password', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmail@com",
                "password" : "nfm_1",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter Valid Password', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmail@com",
                "password" : "nFm_@",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });
    

    test('should return status 400 for Enter Valid Password', async () => {
        const req = {
            body: {
                "username":"Vyom123",
                "email" : "abc@gmail@com",
                "password" : "nFm_@",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(400);
    });
    

    test('should return status 300 for Track already exist in same year', async () => {
        const req = {
            body: {
                "username":"vyom12",
                "email" : "abc@gmail.com",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "trackdev123",
                        "start_date": "2022-04-22T20:09:27.848+00:00",
                        "end_date": "2022-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(300);
    });

    test('should return status 500 for Internal Server Error', async () => {
        const req = {
            body: {
                "username":"",
                "email" : "abc@gmail.com",
                "password" : "A1_a",
                "track_list":[
                    {
                        "track_name": "new_track",
                        "start_date": "2023-04-22T20:09:27.848+00:00",
                        "end_date": "2023-04-22T20:09:27.848+00:00"
                    }
                ],
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(500);
    });

});

describe('POST /api/organizer_login', () => {
    test('should return status 400 for not verified organizer login', async () => {
        const req = {
            body: {
                username: 'Vyomxyz',
                password: 'A1_a'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Organizer not found', async () => {
        const req = {
            body: {
                username: 'vandan12',
                password: 'A1_a'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for invalid password', async () => {
        const req = {
            body: {
                username: 'Vyom',
                password: 'abcd'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 200 for verified organizer login', async () => {
        const req = {
            body: {
                username: 'Vyom12',
                password: 'A1_a'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(200);
    });
});
