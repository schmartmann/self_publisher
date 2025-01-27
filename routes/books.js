const express = require('express');
const booksRouter = express.Router();

booksRouter.get('/', (req, res) => { 
    res.render('index', {
        title: 'Hey',
        message: 'Hello there!',
        books: [
            'Braggi & Aneta',
            'Mecha Comedy'
        ]
    });
});

module.exports = booksRouter;
