const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/organizer_login', () => {
    test('should return status 200 for valid credentials', async () => {
        const req = {
            body: {
                username: 'vyom123',
                password: 'abc'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 400 for invalid username', async () => {
        const req = {
            body: {
                username: 'vyom12',
                password: '123'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for invalid password', async () => {
        const req = {
            body: {
                username: 'vyom123',
                password: 'abcd'
            }
        };
        const res = await request(baseURL).post('/api/organizer_login').send(req.body);
        expect(res.status).toEqual(400);
    });

});


describe('POST /api/organizer_signup', () => {
    test('should return status 200 for Successful signup', async () => {
        const req = {
            body: {
                    "username":"vyomqq",
                    "email" : "abc@abc",
                    "password" : "abcd",
                    "track_name": "xyz",
                    "start_date": "2023-04-22T20:09:27.848+00:00",
                    "end_date": "2023-04-22T20:09:27.848+00:00",
                    "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 300 for already exist username', async () => {
        const req = {
            body: {
                "username":"vyom123",
                "email" : "abc@abc",
                "password" : "abc",
                "track_name": "xyz",
                "start_date": "2023-04-22T20:09:27.848+00:00",
                "end_date": "2023-04-22T20:09:27.848+00:00",
                "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(300);
    });

    test('should return status 300 for Track already exist', async () => {
        const req = {
            body: {
                    "username":"vyomxyz",
                    "email" : "abc@abc",
                    "password" : "abcd",
                    "track_name": "track_2022_2",
                    "start_date": "2023-04-22T20:09:27.848+00:00",
                    "end_date": "2023-04-22T20:09:27.848+00:00",
                    "resume_link": "abc"
            }
        };
        const res = await request(baseURL).post('/api/organizer_signup').send(req.body);
        expect(res.status).toEqual(300);
    });




});