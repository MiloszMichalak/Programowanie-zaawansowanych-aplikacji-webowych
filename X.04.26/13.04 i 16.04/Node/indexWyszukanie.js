const mysql = require('mysql2/promise');
const express = require('express'); // Import the Express module
const cors = require('cors');
const app = express(); // Create an Express application

const PORT = 3100; // Define the port number

app.use(cors());
app.use(express.json());
app.get('/api/data', async (req, res) => {
  //const receivedData = req.body;
  let odp = await bazaD();
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

async function bazaD() {

  let pool = null;
  try {
    pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'rootpassword',
      database: 'ksiazkiklasa',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log('Connected to the MySQL database!');
    let imie = "Adam";
    let nazwisko = "Mickiewicz";

    const [rows] = await pool.execute('SELECT IDautor, nazwisko, imie FROM autorzy where imie = ? and nazwisko = ?', [imie, nazwisko]);
    console.log('Query Results:', rows)
    // Close the connection
    //await pool.end();
    //console.log('Connection closed.');
    return rows;

  } catch (err) {
    console.error('Error:', err);
    if (pool !== null) { await pool.end(); }
    return 0;
  }
}


