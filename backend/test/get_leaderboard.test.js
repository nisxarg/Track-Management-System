const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('GET /api/leaderboard/', () => {
    test('should return status 200 for leaderboard updated', async () => {
        const res = await request(baseURL).get('/api/leaderboard/?track_name=trackdev123&track_year=2022')
        expect(res.status).toEqual(200);
    });
})