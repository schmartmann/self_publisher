const request = require('supertest');
const app = require('../server');

describe('GET /', function() {
    after
    it('redirects from root to books path', async () => {
      return await request(app)
        .get('/')
        .expect(302)
        .expect('Location', '/books')
    });
});
