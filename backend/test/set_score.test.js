const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/set_score', () => {
    test('should return status 200 for Successful setting score', async () => {
        const req = {
            body: {
                "track_name":"trackdev123",
                "team_name":"meet123",
                "score": 1500,
                "track_year": "2022"
            }
        };
        const res = await request(baseURL).post('/api/set_score').send(req.body);
        expect(res.status).toEqual(200);
    })
})