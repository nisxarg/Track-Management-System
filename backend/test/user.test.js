const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/user_signup', () => {
    test('should return status 200 for Successful signup', async () => {
        const req = {
            body: {
                username : 'Vyom',
                email: '123@gmail.com',
                password: 'Vvp1_',
                phone_no : '1234567890',
                gender: "male"
            }
        };
        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 400 for Username already exist', async () => {
        const req = {
            body: {
                username : 'Vyom',
                email: 'abc@gmail.com',
                password: 'Vvp1_',
                phone_no : '1234567890',
                gender: "male"
            }
        };
        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter Valid Email-Address', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123@gmailcom',
                password: '123',
                phone_no : '1234567890',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter Valid Email-Address', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123gmail.com',
                password: '123',
                phone_no : '1234567890',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter Valid Password', async () => {
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

    test('should return status 400 for Enter Valid Password', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123@gmail.com',
                password: '123Aa',
                phone_no : '1234567890',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter Valid Password', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123@gmail.com',
                password: '123Aa',
                phone_no : '1234567890',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter 10 Digit Phone-Number', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123@gmail.com',
                password: '123Aa_',
                phone_no : '123456789',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Enter 10 Digit Phone-Number', async () => {
        const req = {
            body: {
                username : 'meet',
                email: '123@gmail.com',
                password: '123Aa_',
                phone_no : '123456789m',
                gender: "male"
            }
        };

        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 500 for Internal Server Error', async () => {
        const req = {
            body: {
                username : '',
                email: '123@gmail.com',
                password: '123Aa_',
                phone_no : '1234567890',
                gender: "male"
            }
        };
        const res = await request(baseURL).post('/api/user_signup').send(req.body);
        expect(res.status).toEqual(500);
    });

});

describe('POST /api/user_login', () => {
    test('should return status 200 for valid credentials', async () => {
        const req = {
            body: {
                username: 'Vyom',
                password: 'Vvp1_'
            }
        };
        const res = await request(baseURL).post('/api/user_login').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 400 for User not found', async () => {
        const req = {
            body: {
                username: 'Vvvpc',
                password: '123'
            }
        };
        const res = await request(baseURL).post('/api/user_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for Invalid Password', async () => {
        const req = {
            body: {
                username: 'Vyom',
                password: '1234'
            }
        };
        const res = await request(baseURL).post('/api/user_login').send(req.body);
        expect(res.status).toEqual(400);
    });

});


