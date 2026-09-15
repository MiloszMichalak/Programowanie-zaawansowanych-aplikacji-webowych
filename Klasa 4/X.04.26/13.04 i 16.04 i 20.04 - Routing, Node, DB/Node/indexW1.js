const mysql = require('mysql2/promise');

async function main() {
  let connection = null;
  try {
    // Create a connection pool
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ksiazkiklasa',
    });

    console.log('Connected to the MySQL database!');

    // Execute a query
    const [rows, fields] = await connection.execute('SELECT * FROM autorzy');
    console.log('Query Results:', fields);

    // Close the connection
    await connection.end();
    console.log('Connection closed.');
  } catch (err) {
    console.error('Error:', err);
    if (connection !== null) { await connection.end(); }
  }
}

main();
