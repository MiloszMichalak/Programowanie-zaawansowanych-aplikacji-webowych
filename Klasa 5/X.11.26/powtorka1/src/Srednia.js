import { useState } from "react";

export default function Srednia(){
    const [ciag, setCiag] = useState([]);
    const [srednia, setSrednia] = useState(0);
    const [wartosci, setWartosci] = useState({poczatkowa: '', koncowa: '', krok: ''});

    function wypelnijTabele(){
        const krok = Number(wartosci.krok);
        let obecnaWartosc = Number(wartosci.poczatkowa);
        const koncowa = Number(wartosci.koncowa);

        const nowyCiag = [];
        while (obecnaWartosc <= koncowa){
            nowyCiag.push(obecnaWartosc);
            obecnaWartosc += krok;
        }
        setCiag(nowyCiag);
    }

    function policzSrednia(){
        let suma = 0;
        ciag.forEach(element => {
            suma += Number(element);
        });
        setSrednia(suma / ciag.length);
    }

    return (
        <div>
            <form>
                <label for="poczatkowa">Wartosc poczatkowa: </label>
                <input type="number" id="poczatkowa" onChange={event => setWartosci({...wartosci, poczatkowa: event.target.value })}/>
                <br/>
                <label for="koncowa">Wartosc koncowa: </label>
                <input type="number" id="koncowa" onChange={event => setWartosci({...wartosci, koncowa: event.target.value })}/>
                <br/>
                <label for="krok">Krok: </label>
                <input type="number" id="krok" onChange={event => setWartosci({...wartosci, krok: event.target.value })}/>
                <br/>

                {ciag.length === 0 ? "Ciag pusty"
                    :
                    <ol>
                        {ciag.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ol>
                }

                <br/>
                <input type="button" value='Wypełnij tabelę' onClick={wypelnijTabele}/>

                <p>{srednia == 0 ? "Jeszcze nie policzona" : srednia}</p>

                <input type="button" value='Policz srednia' onClick={policzSrednia}/>
            </form>
        </div>
    );
}
