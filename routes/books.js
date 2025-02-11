const express = require('express');
const booksRouter = express.Router();

const testBook = require('../test/driveDocFixture.json')

const booksFixture = require('../test/booksFixture.json')

booksRouter.get('/', (req, res) => { 
    res.render('./books/index', booksFixture);
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
