const request = require('supertest');
const app = require('../server');

describe('GET /', function() {
    it('redirects from root to books path', function() {
      return request(app)
        .get('/')
        .expect(302)
        .expect('Location', '/books')
    })
  })
