require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

const booksRouter = require('./routes/books')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

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
