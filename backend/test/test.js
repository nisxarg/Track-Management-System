const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server'); // Your backend app file

chai.use(chaiHttp);

describe('http://localhost:5000', () => {
  describe('GET /', () => {
    it('should return a 200 status code and a JSON object', async () => {
      const res = await chai.request(app).get('/');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
    });

    it('should return the expected response', async () => {
      const res = await chai.request(app).get('/');
      expect(res.body).to.deep.equal({success:true});
    });
  });


describe('POST /api/user_login/meet', () => {
    it('should return a 200 status code and a JSON object', async () => {
      const res = await chai.request(app)
        .post('/api/user_login/meet')
        .send({"username":"meet","password":"123"});
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
    });

    it('should return the expected response', async () => {
      const res = await chai.request(app)
        .post('/api/user_login/meet')
        .send({"_id":{"$oid":"642d1193e514248d4b43a12c"},"username":"meet","email":"123@gmail.com","password":"123","phone_no":"1234567810","gender":"male","__v":{"$numberInt":"0"}});
      expect(res.body).to.deep.equal({ success: true });
    });
  });

describe('POST /api/organizer_login/hil', () => {
    it('should return a 200 status code and a JSON object', async () => {
      const res = await chai.request(app)
        .post('/api/organizer_login/hil')
        .send({"username":"hil","password":"123"});
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
    });

    it('should return the expected response', async () => {
      const res = await chai.request(app)
        .post('/api/organizer_login/hil')
        .send({"_id":{"$oid":"644034e880b4e813ca23ef29"},"username":"hil","email":"123@gmail.com","password":"123","phone_no":"1234567890","gender":"male","__v":{"$numberInt":"0"}});
      expect(res.body).to.deep.equal({ success: true });
    });
  });


});