const request = require('supertest');

const baseURL = "http://localhost:5000";

//testing for find_track
describe('GET /api/track', () => {
    test('should return status 200 for track found', async () => {
        const res = await request(baseURL).get('/api/track/?year=2020&name_code=track_201')
        expect(res.status).toEqual(200);
    });

    test('should return status 404 for no track found', async () => {
        const res = await request(baseURL).get('/api/track/?year=2021&name_code=track_201')
        expect(res.status).toEqual(404);
    });
}
);
