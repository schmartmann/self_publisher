const express = require('express');
const booksRouter = express.Router();

booksRouter.get('/', (req, res) => { 
    res.json([
        'Braggi & Aneta',
        'Mecha Comedy'
    ])
});

module.exports = booksRouter;
