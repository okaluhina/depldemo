const request = require('supertest');
const server = require('../src/app');

const agent = request.agent(server);

describe('app', () => {
  it('should return 200', async () => {
    const response = await agent.get('/health');

    expect(response.status).toBe(200);
  });
})
