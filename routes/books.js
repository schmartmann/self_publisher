const express = require('express');
const booksRouter = express.Router();

booksRouter.get('/', (req, res) => { 
    res.send('Books home page')
});

module.exports = booksRouter;
