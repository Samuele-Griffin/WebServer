const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getAño', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('nombre', () => {
    return 'Pagina Basica de Gif Animados de Algunos Personajes Ficticios';
});

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/gifs', function(req, res) {
    res.render('gifs');
});

app.listen(port, () => {
    console.log("Escuchando el puerto " + port);
});