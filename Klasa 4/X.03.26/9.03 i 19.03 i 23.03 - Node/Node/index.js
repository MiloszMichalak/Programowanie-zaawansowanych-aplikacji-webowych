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

app.post('/api/sum', (req, res) => {
    const receiveData = req.body;
    console.log("Otrzymane dane:", receiveData);
    const sum = receiveData.d1 + receiveData.d2;
    res.status(200).json(
        { message: "Dane otrzymane pomyslnie", sum: sum, d1: receiveData.d1, d2: receiveData.d2 }
    );
});

app.post('/math/operators', (req, res) => {
    const daneOtrzymane = req.body;
    console.log("Otrzymane dane:", daneOtrzymane);
    let oblicz = dodaj(daneOtrzymane.l1, daneOtrzymane.l2, daneOtrzymane.oper);
    res.status(200).json(
        { wynik: oblicz }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function dodaj(zm1, zm2, dzialanie){
    zm1 = parseFloat(zm1);
    zm2 = parseFloat(zm2);
    dzialanie = parseInt(dzialanie);
    switch(dzialanie){
        case 1: 
            return zm1 + zm2;
        case 2:
            return zm1 - zm2;
        case 3:
            return zm1 * zm2;
        case 4:
            if(zm2 === 0){
                return "Nie można dzielić przez zero!";
            }
            return zm1 / zm2;
    }       
}
