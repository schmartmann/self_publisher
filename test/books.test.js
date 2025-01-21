const request = require('supertest');
const app = require('../server');

const expectedBooks = [ 'Braggi & Aneta', 'Mecha Comedy'];

describe('GET /books', function() {
    it('returns list of books', async () => {
        return await request(app)
            .get('/books')
            .expect(200)
            .expect(expectedBooks)
    });
});
