const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectClientes() {
    const res = await client.query('select * from clientes');
    return res[0];
}
 
module.exports = { selectClientes }

