import { useState } from "react";

export default function Ciag(){
    const [ciag, setCiag] = useState([]);
	const [dane, setDane] = useState({poczatek: '', koniec: '', krok: ''})

	function generujCiag(){
		let poczatek = Number(dane.poczatek);
		let koniec = Number(dane.koniec);
		let iloraz = Number(dane.krok);
		let nowyCiag = [];

		if (poczatek <= 0 || iloraz <= 1) {
			setCiag(nowyCiag);
			return;
		}

		for (let i = poczatek; i <= koniec; i *= iloraz) {
			nowyCiag.push(i);
		}
		setCiag(nowyCiag);
	}

    return (
        <div className="App">
        <h1>Wypisywanie ciagu</h1>
            <form>

                <label for='poczatek'>Poczatek: </label>
                <input type='number' id='poczatek' value={dane.poczatek} onChange={event => setDane({...dane, poczatek: event.target.value})}/>
                <br/>
                <label for='koniec'>Koniec: </label>
                <input type='number' id='koniec' value={dane.koniec} onChange={event => setDane({...dane, koniec: event.target.value})}/>
                <br/>
                <label for='krok'>Iloraz: </label>
                <input type='number' id='krok' value={dane.krok} onChange={event => setDane({...dane, krok: event.target.value})}/>
                <br/>
                <input type='button' value='licz' onClick={generujCiag}/>
            </form>

            {ciag.length === 0 ? "Ciag pusty" :
                <p>
                    {ciag.join(' ')}
                </p>
            }
        </div>
    );
}
