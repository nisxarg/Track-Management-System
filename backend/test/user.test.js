const request = require('supertest');

const baseURL = "https://track-management.onrender.com";

describe('POST /api/user_login', () => {
    test('should return status 200 for valid credentials', async () => {
        const req = {
            body: {
                username: 'Dev',
                password: '123'
            }
        };
        const res = await request(baseURL).post('/api/user_login').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 400 for invalid username', async () => {
        const req = {
            body: {
                username: 'Devi',
                password: '123'
            }
        };
        const res = await request(baseURL).post('/api/user_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for invalid password', async () => {
        const req = {
            body: {
                username: 'Dev',
                password: '1234'
            }
        };
        const res = await request(baseURL).post('/api/user_login').send(req.body);
        expect(res.status).toEqual(400);
    });

});


describe('POST /api/user_signup', () => {
    test('should return status 200 for Successful signup', async () => {
        const req = {
            body: {
                username : 'devq',
                email: '123@gmail.com',
                password: '123',
                phone_no : '1234567890',
                gender: "male"
            }
        };
        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 400 for already exist username', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123@gmail.com',
                password: '123',
                phone_no : '1234567890',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);

    });

});