const app = require('./api.js');
const request = require('supertest');
const { expect } = require('chai');

describe('app', function() {
  it('should return 200', async function() {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });
  it('should return <Welcome to the payment system>', async function() {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });
  it('should return 404 error', async function() {
    const response = await request(app).get('/not-valid-page');
    expect(response.status).to.equal(404);
  });
});
