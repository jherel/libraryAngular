var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(express.static('dist'))

var books = [];
var id = 1;

app.route('/api/books/')
    .get((req, res) => {
        res.json(books)
    })
    .post((req, res) => {
        let book = req.body;
        book.id = id;
        id++;
        books.push(book);
        res.json(book);
    })

app.route('/api/books/:id')
    .get((req, res) => {
        let id = parseInt(req.params["id"]);
        let book = search(id);
        if (book !== undefined) {
            res.json(book);
        } else {
            res.send("undefined");
        }
    })
    .put((req, res) => {
        let id = parseInt(req.params["id"]);
        let book = search(id);
        if (book !== undefined) {
            let book = req.body;
            books[book.id - 1] = book;
            res.json(book);
        } else {
            res.send("undefined");
        }
    })
    .delete((req, res) => {
        let id = parseInt(req.params["id"]);
        let book = search(id);
        if (book !== undefined) {
            books.splice(books.indexOf(book), 1);
            res.json(book);
        } else {
            res.send("undefined");
        }
    })

function search(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id)
            return books[i];
    }
}

app.listen(3030);