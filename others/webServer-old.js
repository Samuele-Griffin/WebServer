const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-type': 'application/json' });

        let objeto = {
            nombre: 'Geralt de Rivia',
            ocupacion: 'The Witcher',
            edad: 30,
            nacionalidad: 'Kaer Morhen',
            url: req.url,
        }

        res.write(JSON.stringify(objeto));
        res.end();
    })
    .listen(8080);

console.log("Escuchando el puerto 8080");