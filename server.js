const express = require('express');
const app = express();
const port = 3000;

const booksRouter = require('./routes/books')

// app.engine('pug', require('pug').__express)
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/books', booksRouter)

app.get('/', (req, res) => {
    res.redirect('/books')
});

app.listen(port, () => { 
    console.log(
        'Guten Tag'
    )
});

module.exports = app
