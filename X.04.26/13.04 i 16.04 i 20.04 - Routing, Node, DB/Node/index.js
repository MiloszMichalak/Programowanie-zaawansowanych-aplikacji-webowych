const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3100;
let pool = null;
async function onBoot() {
  console.log('Server is booting...');

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
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}


async function onShutdown() {
  console.log('Server is shutting down...');
  if (pool !== null) { await pool.end(); }
  console.log('Cleanup complete. Exiting...');
  process.exit(0);
}

app.use(cors());
app.use(express.json());
app.get('/api/data', async (req, res) => {
  let odp = await bazaD();
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});


app.get('/api/ksiazkiAutora', async (req, res) => {
  const imie = req.query.imie;
  const nazwisko = req.query.nazwisko;
  let odp = await ksiazkiAutor(imie,nazwisko);
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});


app.get('/api/ksiazki', async (req, res) => {
  let odp = await bazaKsiazki();
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

// Boot server
onBoot().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  process.on('SIGINT', onShutdown); // Ctrl+C
  process.on('SIGTERM', onShutdown); // Termination signal
});

async function bazaD() {

  let nazwisko = "Mickiewicz";
  let imie = "Adam"

  const [rows] = await pool.execute('SELECT IDautor, nazwisko, imie FROM autorzy where imie=? and nazwisko=?', [imie, nazwisko]);
  console.log('Query Results:', rows)
  return rows;
}


async function bazaKsiazki() {

  const [rows] = await pool.execute('SELECT au.imie, au.nazwisko, ks.tytul, ks.cena, ks.IDksiazka FROM ksiazki as ks, autorzy as au where au.IDautor=ks.autor ORDER BY au.nazwisko');
  console.log('Query Results:', rows)
  return rows;
}


async function ksiazkiAutor(imiePar,nazwiskoPar) {

  const [rows] = await pool.execute('SELECT au.imie, au.nazwisko, ks.tytul, ks.cena, ks.IDksiazka FROM ksiazki as ks, autorzy as au where au.IDautor=ks.autor and imie=? and nazwisko=? ORDER BY ks.tytul',[imiePar,nazwiskoPar]);
  console.log('Query Results:', rows)
  return rows;
}
