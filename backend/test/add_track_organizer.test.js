const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/add_track_organizer', () => {
    test('should return status 300 for track name already exist in track dbs', async () => {
        const req = {
            body: {
                "username" : "Vyomxy",
                "track_name" :"trackdev123",
                "start_date" : "2022-04-24T00:00:00.000+00:00",
                "end_date" : "2022-05-24T00:00:00.000+00:00"
            }
        };
        const res = await request(baseURL).post('/api/add_track_organizer').send(req.body);
        expect(res.status).toEqual(300);
    }),
    test('should return status 200 for track added for verification successfully', async () => {
        const req = {
            body: {
                "username" : "Vyomxy",
                "track_name" :"track_123",
                "start_date" : "2022-04-24T00:00:00.000+00:00",
                "end_date" : "2022-05-24T00:00:00.000+00:00"
            }
        };
        const res = await request(baseURL).post('/api/add_track_organizer').send(req.body);
        expect(res.status).toEqual(200);
    }),
    test('should return status 400 for You already requested for this track in this year, please wait for admins approval.', async () => {
        const req = {
            body: {
                "username" : "Vyomxy",
                "track_name" :"track_123",
                "start_date" : "2022-04-24T00:00:00.000+00:00",
                "end_date" : "2022-05-24T00:00:00.000+00:00"
            }
        };
        const res = await request(baseURL).post('/api/add_track_organizer').send(req.body);
        expect(res.status).toEqual(400);
    })
})