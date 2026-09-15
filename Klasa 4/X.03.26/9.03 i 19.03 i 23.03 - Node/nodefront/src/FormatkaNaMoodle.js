import React from "react";

//funkcja doSerwera
function doSerwera(d1, d2, op, setResult) {
    const dataToServer = { l1: d1, l2: d2, oper: op };
    fetch('http://localhost:3100/math/operators', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToServer)
    })
    .then(response => response.json())
    .then((json_data) => setResult(json_data.wynik))
    .catch(error => {
        console.error('Error:', error);
    });
}


function Formatka() {
    const operacja = [
        { id: 0, dzialanie: "proszę wybrać z listy" },
        { id: 1, dzialanie: "dodawanie" },
        { id: 2, dzialanie: "odejmowanie" },
        { id: 3, dzialanie: "mnożenie" },
        { id: 4, dzialanie: "dzielenie" }
    ]


    const [dana1, setDana1] = React.useState("");
    const [dana2, setDana2] = React.useState("");
    const [wynik, setWynik] = React.useState("");
    const [operator, setOperator] = React.useState(0);

    const submitHandler = event => {
        event.preventDefault();
        let tmp=parseInt(operator);
        if (tmp === 0) {
            alert("Prosze wybrac operacje");
        }
        else {
            doSerwera(dana1, dana2, operator, setWynik);
        }

    };

    const onChangeHandlerDana1 = event => {
        setDana1(event.target.value);
    }

    const onChangeHandlerDana2 = event => {
        setDana2(event.target.value);
    }

    const onChangeHandlerWynik = event => {
        setWynik(event.target.value);
    }

    const onChangeHandlerOperator = event => {
        setOperator(event.target.value);
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Proszę podać pierwszą liczbę:
                    <input name="dana1"
                        type="text"
                        value={dana1}
                        onChange={onChangeHandlerDana1}
                        required
                    />
                </p>
                <p>Proszę podać drugą liczbę:
                    <input name="dana2"
                        type="text"
                        value={dana2}
                        onChange={onChangeHandlerDana2}
                        required
                    />
                </p>
                <p>Wynik obliczeń:
                    <input name="wynik"
                        type="text"
                        value={wynik}
                        onChange={onChangeHandlerWynik}
                    />

                </p>
                <p>Proszę wybrać operację:
                    <select name="operator" value={operator} onChange={onChangeHandlerOperator}>
                        {operacja.map((elem, klucz) => (
                            <option key={elem.id} value={elem.id}>{elem.dzialanie}</option>
                        )
                        )
                        }
                    </select>
                </p>
                <input type="submit" value="Policz" />
            </form>
        </div>
    )
}

export default Formatka;
