const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.get('/api/data', (req, res) => {
    res.json({message: "Pozdro z serwera"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

