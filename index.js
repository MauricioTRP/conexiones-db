const { Client } = require('pg')

const conection = async (column, id) => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: process.argv[2],
    user: process.argv[3],
    password: process.argv[4]
  })
  
  // Conecta cliente a DB
  await client.connect();
  
  // Consulta a DB
  const result = await client.query("SELECT $1 FROM users WHERE id=$2", [column, id]);
  // "SELECT * FROM users WHERE id=4"
  
  // Operaciones con la data
  console.log(result.rows)
  
  // Cerrar conexión
  await client.end()
}

conection('nombre', 4);
