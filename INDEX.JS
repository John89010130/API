require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db.js');


app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//inicia o servidor
app.listen(port);
console.log('API funcionando!');


app.get('/clientes', async (req, res) => {
    const results = await db.selectClientes();
    res.json(results);
})