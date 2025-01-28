const express = require('express');
const booksRouter = express.Router();

booksRouter.get('/', (req, res) => { 
    res.render('./books/index', {
        title: 'Hey',
        message: 'Hello there!',
        books: [
            'Braggi & Aneta',
            'Mecha Comedy'
        ]
    });
});

booksRouter.get('/drive', (req, res) => {
    res.render('./drive/index', { 
        clientId: process.env.CLIENT_ID.toString(),
        apiKey: process.env.DRIVE_API_KEY.toString()
    });
})

module.exports = booksRouter;
