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



var lettersArray = "HI MICKEY ITS YOUR OLD PAL MICRO ZUMBO I AM TOO SMALL TO HEAR SO I GOTTA LEAP FROM KEY TO KEY TO TYPE THIS OUT".split('').reverse()

for (let i = 0; i < lettersArray.length; i++) { 

    var randomSecondsDelay = Math.floor((Math.random() + 1) * 3);

    setTimeout(() => { 
        var letter = lettersArray.pop();
        console.log(letter)
    }, randomSecondsDelay * 1000)
}
