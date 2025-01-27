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

    // google docs api
    // will give structure
    // that will be saved into DB
    // also how should this actually work?
    // 1. write doc in word
    // 2. "back up" doc in Drive
    // 3. run script that pulls latest draft from drive
    // 4. save latest draft into DB
    // 5. render draft in UI?
});
