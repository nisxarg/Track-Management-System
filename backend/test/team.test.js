const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/team_signup', () => {
    test('should return status 300 for Team already exist for same name,year and track', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_1",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "Abc1_",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(300);
    });

    test('should return status 300 for track dont exist in track db', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_1",
                "track_name": "track_",
                "track_year": "2022",
                "team_password": "Abc1_",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(300);
    });

    test('should return status 500 for user not found of teammate-1', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_2",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "Abc1_",
                "teammate_1": "xyz"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(500);
    });

    test('should return status 400 for enter valid password', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_2",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "abc",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for enter valid password', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_2",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "abc1_",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for enter valid password', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_2",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "Abc1",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for enter valid password', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_2",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "Ab_",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(400);
    });


    test('should return status 500 for registration not possible', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_2",
                "track_name": "track_test",
                "track_year": "2023",
                "team_password": "Ab_1",
                "teammate_1": "Charmil"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(500);
    });

    test('should return status 200 for Registration possible', async () => {
        const req = {
            body: {
                    "team_name": "Team_Test_new",
                    "track_name": "track_test",
                    "track_year": "2023",
                    "team_password": "Ab_1",
                    "teammate_1": "meet123"
            }
        };
        const res = await request(baseURL).post('/api/team_signup').send(req.body);
        expect(res.status).toEqual(200);
    });

});

describe('POST /api/team_login', () => {
    test('should return status 200 for verified login', async () => {
        const req = {
            body: {
                "team_name": "Team_Test_3",
                "team_password": "Ab_1"
            }
        };
        const res = await request(baseURL).post('/api/team_login').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 400 for Team not found', async () => {
        const req = {
            body: {
                "team_name": "Team_Test3",
                "team_password": "Ab_1"
            }
        };
        const res = await request(baseURL).post('/api/team_login').send(req.body);
        expect(res.status).toEqual(400);
    });

    test('should return status 400 for invalid password', async () => {
        const req = {
            body: {
                "team_name": "Team_Test3",
                "team_password": "Ab_"
            }
        };
        const res = await request(baseURL).post('/api/team_login').send(req.body);
        expect(res.status).toEqual(400);
    });
});
