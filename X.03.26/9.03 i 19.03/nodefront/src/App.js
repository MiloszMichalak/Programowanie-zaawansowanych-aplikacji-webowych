import './App.css';
import { useState, useEffect } from 'react';

function App() {
    // wersja 2
    const [result, setResult] = useState({sum: null, l1: null, l2: null});
    useEffect(() => {
        const dane = { d1: 3, d2: 4};

        fetch('http://localhost:3100/api/sum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dane)
        })
        .then((response) => response.json())
        .then((data) => setResult(
            {
                sum: data.sum,
                l1: data.d1,
                l2: data.d2
            }
        ))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <h3>Odpowiedz od serwera: {result.sum} = {result.l1} + {result.l2}</h3>
        </div>
    );
}

export default App;
