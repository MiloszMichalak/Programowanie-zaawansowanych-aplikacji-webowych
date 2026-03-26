const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;

app.use(cors());
app.use(express.json());

app.post('/math/check/triangle', (req, res) => {
    const daneOtrzymane = req.body;
    
    let dane = sprawdz(daneOtrzymane.type, daneOtrzymane.value1, daneOtrzymane.value2, daneOtrzymane.value3);
    
    res.status(200).json(
        { type: dane.type, info: dane.info }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function sprawdz(type, value1, value2, value3) {
    switch (type) {
        case "1":
            if (sprawdzBoki(value1, value2, value3)) {
                if (value1 === value2 && value2 === value3) {
                    return { type: "rownoboczny", info: "Podane liczby moga utworzyc trojkat rownoboczny" };
                } else if (value1 === value2 || value1 === value3 || value2 === value3) {
                    return { type: "rownoramienny", info: "Podane liczby moga utworzyc trojkat rownoramienny" };
                } else if (Math.pow(value1, 2) + Math.pow(value2, 2) === Math.pow(value3, 2) ||
                    Math.pow(value1, 2) + Math.pow(value3, 2) === Math.pow(value2, 2) ||
                    Math.pow(value2, 2) + Math.pow(value3, 2) === Math.pow(value1, 2)) {
                    return { type: "prostokatny", info: "Podane liczby moga utworzyc trojkat prostokatny" };
                } else {
                    return { type: "dowolny", info: "Podane liczby moga utworzyc trojkat dowolny" };
                }
            } else {
                return { type: "error", info: "Podane liczby nie moga utworzyc trojkata" };
            }
        case "2":
            if (sprawdzKaty(value1, value2, value3)) {
                if (value1 === value2 && value2 === value3) {
                    return { type: "rownoboczny", info: "Podane katy moga utworzyc trojkat rownoboczny" };
                } else if (value1 === value2 || value1 === value3 || value2 === value3) {
                    return { type: "rownoramienny", info: "Podane katy moga utworzyc trojkat rownoramienny" };
                } else if (value1 === 90 || value2 === 90 || value3 === 90) {
                    return { type: "prostokatny", info: "Podane katy moga utworzyc trojkat prostokatny" };
                } else if (value1 < 90 && value2 < 90 && value3 < 90) {
                    return { type: "ostrokatny", info: "Podane katy moga utworzyc trojkat ostrokatny" };
                } else if (value1 > 90 || value2 > 90 || value3 > 90) {
                    return { type: "rozwartokatny", info: "Podane katy moga utworzyc trojkat rozwartokatny" };
                }
            } else {
                return { type: "error", info: "Podane katy nie moga utworzyc trojkata" };
            }
    }
}

function sprawdzBoki(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && a + c > b && b + c > a) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function sprawdzKaty(kat1, kat2, kat3) {
    kat1 = parseFloat(kat1);
    kat2 = parseFloat(kat2);
    kat3 = parseFloat(kat3);
    if (kat1 > 0 && kat2 > 0 && kat3 > 0) {
        if (kat1 + kat2 + kat3 === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
