const { Pool } = require('pg')

const connectionString = "postgresql://mauro:nodedb@127.0.0.1:5432/jeans"

const connection = async () => {

  const pool = new Pool({
    connectionString
  })
  
  const result = await pool.query('SELECT NOW()');
  console.log(result)
}

connection()