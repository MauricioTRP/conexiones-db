const { Pool } = require('pg')

// max -> Maximo de clientes conectados al pool
// min -> Mínimo de clientes conectados al pool
// idleTimeoutMills -> Tiempo que puede permanecer un cliente inactivo
// connectionTimeoutMills -> Tiempo de inactividad del pool
const config = {
  host: 'localhost',
  port: 5432,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASS,
  max: 5,
  min: 0,
  idleTimeoutMills: 3000,
  connectionTimeoutMills: 10000
}

const connection = async () => {

  const pool = new Pool(config)
  
  const results = await pool.query("SELECT * FROM users")
  console.log(results.rows)
}

connection()