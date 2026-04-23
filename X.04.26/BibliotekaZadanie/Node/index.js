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

onBoot().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  process.on('SIGINT', onShutdown);
  process.on('SIGTERM', onShutdown);
});

app.use(cors());
app.use(express.json());

app.get('/czytelnicy', async (req, res) => {
  let odp = await listaCzytelnikow();
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

app.get('/czytelnicy/wypozyczenia', async (req, res) => {
  const body = req.body;
  let odp = await listaWypozyczen(body.imie, body.nazwisko);
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

app.post('/autorzy', async (req, res) => {
  const body = req.body;
  let odp = await wstawAutora(body.imie, body.nazwisko);
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

app.post('/ksiazki', async (req, res) => {
  const body = req.body;
  let odp = await wstawKsiazke(body.idAutora, body.tytul, body.cena, body.dataZakupu);
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

app.get('/autorzy', async (req, res) => {
  let odp = await listaAutorow();
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});

app.get('/ksiazki', async (req, res) => {
  let odp = await listaKsiazek();
  console.log('ODP: ', odp);
  res.status(200).json(
    { wynik: odp }
  );
});


async function listaCzytelnikow() {
  const [rows] = await pool.execute('SELECT * FROM `czytelnicy`');
  console.log('Query Results:', rows)
  return rows;
}

async function listaWypozyczen(imie, nazwisko) {
  const [rows] = await pool.execute('SELECT czytImie, czytNazwisko, ksiazki.tytul FROM wypozyczenia NATURAL JOIN ksiazki NATURAL JOIN czytelnicy WHERE czytelnicy.czytImie=? AND czytelnicy.czytNazwisko = ?', [imie, nazwisko]);
  console.log('Query Results:', rows)
  return rows;
}

async function wstawAutora(imie, nazwisko) {
  const odp = await pool.execute('INSERT INTO `autorzy`(`IDautor`, `nazwisko`, `imie`) VALUES (null,?,?)', [nazwisko, imie]);
  return odp[0].warningStatus; // 0 jesli sie udalo
}

async function wstawKsiazke(idAutora, tytul, cena, dataZakupu) {
  const odp = await pool.execute('INSERT INTO `ksiazki`(`IDksiazka`, `autor`, `tytul`, `cena`, `dataZakupu`) VALUES (null,?,?,?,?)', [idAutora, tytul, cena, dataZakupu]);
  return odp[0].warningStatus;
}

async function listaAutorow() {
  const [rows] = await pool.execute('SELECT * FROM `autorzy`');
  console.log('Query Results:', rows)
  return rows;
}

async function listaKsiazek() {
  const [rows] = await pool.execute('SELECT autorzy.imie, autorzy.nazwisko, ksiazki.tytul, ksiazki.cena FROM ksiazki NATURAL JOIN autorzy;');
  console.log('Query Results:', rows)
  return rows;
}
