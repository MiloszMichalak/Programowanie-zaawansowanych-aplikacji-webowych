const mysql = require('mysql2/promise');

async function main() {

  let pool = null;
  try {
      pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ksiazkiklasa',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log('Connected to the MySQL database!');

    // Execute a query
    const [rows] = await pool.execute('SELECT * FROM autorzy');
    console.log('Query Results:', rows)
    // Close the connection
    await pool.end();
    console.log('Connection closed.');

  } catch (err) {
    console.error('Error:', err);
    if (pool !== null) { await pool.end(); }
  }
}

main();
