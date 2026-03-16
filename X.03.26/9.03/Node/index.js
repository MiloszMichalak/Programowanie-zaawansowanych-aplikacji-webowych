const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;

app.use(cors());
app.use(express.json());

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.get('/api/data', (req, res) => {
    res.json({message: "Pozdro z serwera"});
});

app.post('/api/data', (req, res) => {
    const receiveData = req.body;
    console.log("Otrzymane dane:", receiveData);
    res.status(200).json(
        { message: "Dane otrzymane pomyslnie", zwrot: receiveData }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

