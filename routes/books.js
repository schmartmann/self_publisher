const express = require('express');
const booksRouter = express.Router();

const testBook = require('../test/driveDocFixture.json')

booksRouter.get('/', (req, res) => { 
    res.render('./books/index', {
        title: 'Hey',
        message: 'Hello there!',
        books: [
            { title: 'Braggi & Aneta', id: 1234 },
            { title: 'Mecha Comedy', id: 4321 }
        ]
    });
});

booksRouter.get('/:id', (req, res) => { 
    res.render('./books/view', { 
        book: 
        testBook 
    })
});

booksRouter.get('/drive', (req, res) => {
    res.render('./drive/index', { 
        clientId: process.env.CLIENT_ID.toString(),
        apiKey: process.env.DRIVE_API_KEY.toString()
    });
})

module.exports = booksRouter;
