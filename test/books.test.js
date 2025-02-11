const request = require('supertest');
const app = require('../server');
const ejs = require('ejs');

const booksFixture = require('./booksFixture.json')
const testBook = require('../test/driveDocFixture.json')

describe('GET /books', () => {
    it('returns list of books', async () => {
        let indexTemplate = await ejs.renderFile('views/books/index.html', { 
            books: booksFixture['books']
        })

        return await request(app)
            .get('/books')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(indexTemplate)
    });

});

describe('GET /books/:id', () => { 
    it('returns a book', async () => {
        let viewTemplate = await ejs.renderFile('views/books/view.html', { 
            book: testBook
        })

        return await request(app)
            .get('/books/1234')
            .expect(200)
            .expect(viewTemplate)
    });
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
