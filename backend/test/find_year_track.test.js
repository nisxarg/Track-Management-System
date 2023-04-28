const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('GET /api/year/:year', () => {
    test('should return status 200 for track found', async () => {
        const res = await request(baseURL).get('/api/year/2021')
        expect(res.status).toEqual(200);
    });

    test('should return status 404 for no track found', async () => {
        const res = await request(baseURL).get('/api/year/2024')
        expect(res.status).toEqual(404);
    });
}
);