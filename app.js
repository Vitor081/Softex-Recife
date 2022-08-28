const express = require("express");
const app = express();

const db = require('./ models/db');

app.get("/", function (req, res){
    res.send('Pagina Home');
});

app.get("/contato", (req, res) => {
    res.send('Pagina de contato');
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});